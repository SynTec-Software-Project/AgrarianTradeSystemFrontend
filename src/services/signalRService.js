import * as signalR from "@microsoft/signalr"
let connection;

export const startSignalRConnection = () => {
  connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7144/notificationhub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

  connection.start().catch((err) => console.error(err.toString()));
};

export const onOrderStatusUpdate = (callback) => {
  if (connection) {
    connection.on("OrderStatusUpdated", callback);
  }
};

export const sendOrderStatusConfirmation = (orderId, isConfirmed) => {
  if (connection) {
    connection.invoke("ConfirmOrderStatus", orderId, isConfirmed).catch((err) => console.error(err.toString()));
  }
};