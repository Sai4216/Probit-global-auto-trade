// import ReactDOM from "react-dom/client";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Greeting = () => {
//   const [backendData, setbackendData] = useState([{}]);
//   useEffect(() => {
//     fetch("http://localhost:5000/api")
//       .then((response) => response.json())
//       .then((data) => setbackendData(data));
//     // setbackendData(data);
//   }, []);
//   return (
//     <>
//       <h1>hello</h1>
//       {/* {backendData.users.map((user, i) => {
//         return (
//           <div>
//             <p key={i}>user</p>
//           </div>
//         );

//       })} */}

//       {typeof backendData.users == "undefined" ? (
//         <p>loading</p>
//       ) : (
//         backendData.users.map((user, i) => {
//           return (
//             <div>
//               <p key={i}>{user}</p>
//             </div>
//           );
//         })
//       )}
//     </>
//   );
// };

// import ReactDOM from "react-dom/client";
// import { useEffect, useState } from "react";

// const Greeting = () => {
//   const [backendData, setbackendData] = useState([]);
//   useEffect(() => {
//     const getToken = async () => {
//       const authHeader =
//         "Basic " +
//         "9be88adb059a6741" +
//         ":" +
//         "7ef1f2967a9fe88916ede5b586b6976e";

//       const resp = await fetch("https://accounts.probit.com/token", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: authHeader,
//         },
//         body: JSON.stringify({
//           grant_type: "client_credentials",
//         }),
//       }).then((Response) => setbackendData(Response));
//       if (!resp.ok) {
//         console.log("error");
//       }
//       s;
//     };

//     // const getBalance = async () => {
//     //   const { access_token: accessToken } = await getToken();
//     //   const resp = await fetch(
//     //     "https://api.probit.com/api/exchange/v1/balance",
//     //     {
//     //       method: "GET",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //         Authorization: "Bearer " + accessToken,
//     //       },
//     //     }
//     //   );
//     //   if (!resp.ok) {
//     //     throw new Error(resp.statusText);
//     //   }
//     //   return resp.json();
//     // };
//     // getBalance().then((balances) => setbackendData(balances));

//     getToken();
//   }, []);
//   return <h1>{backendData}</h1>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);
