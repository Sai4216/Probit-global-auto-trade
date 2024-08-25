import axios from "axios";
const RegisterValidation = async (data) => {
  const response = await axios.post("http://localhost:5000/register", data);
  return response;
};
const LoginValidation = async (data) => {
  const response = await axios.post("http://localhost:5000/login", data);
  return response;
};

export { RegisterValidation, LoginValidation };
