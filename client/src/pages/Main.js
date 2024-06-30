import { useEffect, useState } from "react";
import "../css/Main.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { cryptoData } from "../cryptoData";
export const Main = () => {
  const location = useLocation();
  const [balance, setBalance] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [userData, setData] = useState([]);
  const handleCheckbox = (e, index) => {
    const activeData = document.getElementById(index).checked;
    if (activeData == true) {
      setData((oldData) => [...oldData, e.target.value]);
    } else {
      setData(userData.filter((user) => user !== e.target.value));
    }
  };
  useEffect(() => {
    const getuserData = async () => {
      const id = location.state.id;
      const url = "http://localhost:5000/getdata/" + String(id);
      const getData = await axios.post(url, id);
      const balance = await cryptoData(getData.data);
      setBalance(balance);
      setLoading(false);
    };
    getuserData();
  }, []);
  if (isLoading) {
    return <h4>Loading</h4>;
  }

  return (
    <div>
      {balance.map((coin, index) => {
        const { currency_id, total, available } = coin;
        return (
          <div key={index}>
            <h4>{currency_id}</h4>
            <h4>{total}</h4>
            <h4>{available}</h4>
            <input
              type="checkbox"
              className="checkbox"
              id={index}
              value={currency_id}
              onChange={(e) => handleCheckbox(e, index)}
            />
          </div>
        );
      })}
    </div>
  );
};
