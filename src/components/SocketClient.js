import React, { useEffect, useState } from "react";

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

import socketIOClient from "socket.io-client";
const ENDPOINT = "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl";

export default function ClientComponent() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = io(ENDPOINT, {path: '/flights'});
    socket.on("POSITION", data => {
      setResponse(data);
      console.log(data)
    });

  }, []);

  return (
    <p>
      response: {response}
    </p>
  );
}