import { useState } from "react";
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
    if (res.data.message === "success") {
      navigate("/main", { state: { id: res.data.id, name: res.data.name } });
    } else {
      setError(res.data.message);
    }
  };
  return (
    <div className=" text-center pt-5 bg-info" style={{ height: "100vh" }}>
      <form
        onSubmit={handleSubmit}
        className="  container  border border-black rounded-2 bg-white w-25 p-5">
        <div className="row  mb-3">
          <h3>Login Here</h3>
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
        <div className="row col  mx-auto ">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
        <span>{err || ""}</span>
      </form>
    </div>
  );
};
