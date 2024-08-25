const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const user = require("../model/User");
const axios = require("axios");

router.post("/", (req, res) => {
  return res.json({ message: "done" });
});

router.post("/register", async (req, res) => {
  const { username, password, clientID, secretKey } = req.body;
  if (!username || !password || !clientID || !secretKey) {
    return res.json({ message: "Please fill all fields" });
  }
  const duplicate = await user.findOne({ username: username }).exec();
  if (duplicate) {
    return res.json({ message: "user already exists" });
  }
  const hashpwd = await bcrypt.hash(password, 10);
  const newUser = await user
    .create({
      username: username,
      password: hashpwd,
      clientID: clientID,
      secretKey: secretKey,
    })
    .then(() => console.log(`new user ${username} is created`));
  const foundUser = await user.findOne({ username: username }).exec();
  return res.send({ message: "success", id: foundUser._id });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ message: "Please fill all fields" });
  }
  const foundUser = await user.findOne({ username: username }).exec();
  if (!foundUser) {
    return res.json({ message: "user not found" });
  }
  return res.send({
    message: "success",
    id: foundUser._id,
    name: foundUser.username,
  });
});

router.post("/getdata/:id", async (req, res) => {
  const id = req.params.id;
  const founduser = await user.findOne({ _id: id }).exec();
  return res.json(founduser);
});

router.post("/crypto", async (req, res) => {
  const { clientID, secretKey } = req.body;
  const getToken = async () => {
    const authHeader =
      "Basic " +
      new Buffer.from(clientID + ":" + secretKey, "utf-8").toString("base64");
    const resp = await fetch("https://accounts.probit.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
      }),
    });
    if (!resp.ok) {
      console.log("error");
    }
    return resp.json();
  };
  const getBalance = async () => {
    const { access_token: accessToken } = await getToken();
    const resp = await fetch("https://api.probit.com/api/exchange/v1/balance", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  };
  const data1 = await getBalance();
  res.json(data1);
});

router.get("/list", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.probit.com/api/exchange/v1/ticker",
    headers: { accept: "application/json" },
  };
  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
      // return res.json(response);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
