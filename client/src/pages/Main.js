import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { cryptoData } from "../cryptoData";
export const Main = () => {
  const location = useLocation();
  const [balance, setBalance] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [userData, setData] = useState([]);
  const [list, setList] = useState([]);
  const handleCheckbox = (e, index) => {
    const activeData = document.getElementById(index).checked;
    if (activeData === true) {
      setData((oldData) => [...oldData, e.target.value]);
    } else {
      setData(userData.filter((user) => user !== e.target.value));
    }
  };

  useEffect(() => {
    const getList = async () => {
      const list = await axios.get(
        "https://probit-global-auto-trade-app.onrender.com/list"
      );
      const newList = list.data.data.filter((coin) => {
        const name = String(coin.last);
        const len = name.length;
        const base = Number(coin.quote_volume);
        return name.charAt(len - 4) === "0" && base > 500;
      });
      // console.log(newList);
      setList(newList);
      // console.log(list.data.data);
    };
    setInterval(getList, 30000);
    const getuserData = async () => {
      const id = location.state.id;
      const url =
        "https://probit-global-auto-trade-app.onrender.com/getdata/" +
        String(id);
      const getData = await axios.post(url, id);
      const balance = await cryptoData(getData.data);
      setBalance(balance);
      setLoading(false);
    };
    getuserData();
    getList();
  }, []);
  if (isLoading) {
    return <h4>Loading</h4>;
  }

  return (
    <div>
      <div div className="container-fluid" style={{ boxSizing: "border-box" }}>
        <div
          className="row pt-4 ps-3 border border-primary fixed-top bg-primary text-white"
          style={{ height: "100px" }}>
          <h1>Hello {location.state.name.toUpperCase()}</h1>
        </div>
        <div
          className="row border  "
          style={{ marginTop: "100px", height: "100%" }}>
          <div
            class="col-3 m-0 p-0 container border position-fixed overflow-auto"
            style={{ height: "100%" }}>
            {balance.map((coin, index) => {
              const { currency_id, total } = coin;
              return (
                <div className="row mt-3 w-80 mx-auto" key={index}>
                  <div className="col-4">{currency_id}</div>
                  <div className="col-8 d-flex flex-row-reverse">{total}</div>
                </div>
              );
            })}
          </div>
          <div
            class="col-9 ps-3 positon-fixed container-fluid "
            style={{ marginLeft: "25%", width: "90%" }}>
            {list.map((coin, index) => {
              const { last, low, high, market_id, quote_volume } = coin;
              return (
                <div className="row w-75 ms-5 border border-dark mt-3 rounded-2">
                  <div className="col-3">
                    <h5>{market_id}</h5>
                    <h5>Low: {low}</h5>
                    <h5>Hogh: {high}</h5>
                  </div>
                  <h5 className="col-4">volume: {quote_volume}</h5>
                  <h5 className="col-3">Current: {last}</h5>
                  <form className="col-2 d-flex align-items-center flex-row-reverse">
                    <label>Trade</label>
                    <div className=" form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id={index}
                        value={market_id}
                        onChange={(e) => handleCheckbox(e, index)}
                      />
                    </div>
                  </form>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
