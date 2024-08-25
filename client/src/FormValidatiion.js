import axios from "axios";
const RegisterValidation = async (data) => {
  const response = await axios.post(
    "https://probit-global-auto-trade-app.onrender.com/register",
    data
  );
  return response;
};
const LoginValidation = async (data) => {
  const response = await axios.post(
    "https://probit-global-auto-trade-app.onrender.com/login",
    data
  );
  return response;
};

export { RegisterValidation, LoginValidation };
