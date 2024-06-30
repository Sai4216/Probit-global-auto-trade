import { useState } from "react";
import "../css/Login.css";
import { LoginValidation } from "../FormValidatiion";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [err, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData);
    e.currentTarget.reset();
    const res = await LoginValidation(userdata);
    if (res.data.message == "success") {
      navigate("/main", { state: { id: res.data.id } });
    } else {
      setError(res.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
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
        <button type="submit">Log In</button>
        <span>{err || ""}</span>
      </form>
    </div>
  );
};
