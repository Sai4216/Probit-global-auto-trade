import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterValidation } from "../FormValidatiion";

export const Register = () => {
  const [err, setError] = useState("");
  // const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData);
    e.currentTarget.reset();
    const res = await RegisterValidation(userdata);
    if (res.data.message === "success") {
      navigate("/main", { state: { id: res.data.id } });
    } else {
      setError(res.data.message);
    }
  };
  return (
    <div className=" text-center pt-5 bg-info" style={{ height: "100vh" }}>
      <form
        onSubmit={handleSubmit}
        className="  container  border border-black rounded-2 bg-white  w-25   p-5">
        <div className="row  mb-3">
          <h3>Register Here</h3>
        </div>

        <div className=" row form-floating col mx-auto mb-4 ">
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            className="form-control"
          />
          <label className="form-label">Username</label>
        </div>
        <div className=" row form-floating col mx-auto mb-4 ">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="form-control"
          />
          <label className="form-label">Password</label>
        </div>
        <div className=" row form-floating col mx-auto mb-4 ">
          <input
            type="text"
            placeholder="client Id"
            id="clientID"
            name="clientID"
            className="form-control"
          />
          <label className="form-label">Client Id</label>
        </div>
        <div className=" row form-floating col mx-auto mb-4 ">
          <input
            type="password"
            placeholder="secret key"
            id="secretKey"
            name="secretKey"
            className="form-control"
          />
          <label className="form-label">Secret key</label>
        </div>
        <div className="row col  mx-auto ">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <span>{err || ""}</span>
      </form>
    </div>
  );
};
