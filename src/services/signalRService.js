// import React, { useEffect, useState } from "react";
// import * as signalR from "@microsoft/signalr";

// const useSignalRConnection = (userId) => {
//   const [connection, setConnection] = useState(null);
//   const [notification, setNotification] = useState("");

//   useEffect(() => {
//     const connect = new signalR.HubConnectionBuilder()
//       .withUrl("https://localhost:7144/notificationHub")
//       .configureLogging(signalR.LogLevel.Information)
//       .withAutomaticReconnect()
//       .build();

//     connect.start()
//       .then(() => {
//         console.log("SignalR Connected");
//         connect.on("ReceiveNotification", (message) => {
//           setNotification(message);
//         });
//       })
//       .catch(err => console.error("SignalR Connection Error: ", err));

//     setConnection(connect);

//     return () => {
//       connect.stop().then(() => console.log("SignalR Disconnected"));
//     };
//   }, [userId]);

//   return { connection, notification, setNotification };
// };

// export default useSignalRConnection;
