import { useState } from "react";
import "../css/Register.css";
import { useNavigate } from "react-router-dom";
import { RegisterValidation } from "../FormValidatiion";

export const Register = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData);
    e.currentTarget.reset();
    const res = await RegisterValidation(userdata);
    if (res.data.message == "success") {
      navigate("/main", { state: { id: res.data.id } });
    } else {
      setError(res.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Register Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />

        <label htmlFor="clientID">Client Id</label>
        <input
          type="text"
          placeholder="client Id"
          id="clientID"
          name="clientID"
        />
        <label htmlFor="secretKey">Secret key</label>
        <input
          type="password"
          placeholder="secret key"
          id="secretKey"
          name="secretKey"
        />
        <button type="submit">Register</button>
        <span>{err || ""}</span>
      </form>
    </div>
  );
};
