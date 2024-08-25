import axios from "axios";

export const cryptoData = async (data) => {
  const { clientID, secretKey } = data;
  const crypto = await axios.post(
    "https://probit-global-auto-trade-app.onrender.com/crypto",
    {
      clientID: clientID,
      secretKey: secretKey,
    }
  );
  return crypto.data.data;
};
