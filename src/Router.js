import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Chart from "./page/chart";
import Reservation from "./page/resrvation";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  );
};
export default Router;
