import axios from "axios";

export const cryptoData = async (data) => {
  const { clientID, secretKey } = data;
  const crypto = await axios.post("http://localhost:5000/crypto", {
    clientID: clientID,
    secretKey: secretKey,
  });
  return crypto.data.data;
};
