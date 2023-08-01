"use client";

import LineGraph from "../Components/LineGraph";
import SideBar from "../Components/SideBar";
import BarGraph from "../Components/BarGraph";
import PieGraph from "../Components/PieGraph";
import AreaGraph from "../Components/AreaChart";

export default function Statistics() {
  return (
    <div className="bg-light">
      <div className="border">
      <SideBar></SideBar>
      </div>
        <div className="container">
          <h1 className="mt-4 mx-4">Statistics Dashboard</h1>
          <p className="my-3 mx-5">Monthly or Yearly Numbers</p>
        </div>
        <div className="container d-flex justify-content-center">
          <LineGraph></LineGraph>
        </div>
      <div className="bg-white justify-content-center">
        <div className="container d-flex justify-content-center">
          <PieGraph></PieGraph>
          <div className="my-5">

          <BarGraph></BarGraph>
          </div>
        </div>
        <div className="container mb-5">
          <AreaGraph></AreaGraph>
        </div>
      </div>
      </div>
  )
}
