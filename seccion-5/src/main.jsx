import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./components/CounterApp";
import { FirstApp } from "./FirstApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={1} />
    {/* <FirstApp title="title" /> */}
  </React.StrictMode>
);
