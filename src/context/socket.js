import React from 'react';
import socketio from "socket.io-client";
// import { SOCKET_URL } from "config";
const SOCKET_URL = "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl";

export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = React.createContext();
