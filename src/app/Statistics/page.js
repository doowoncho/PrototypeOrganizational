
import LineGraph from "../Components/LineGraph";
import SideBar from "../Components/SideBar";
import BarGraph from "../Components/BarGraph";
import PieGraph from "../Components/PieGraph";
import AreaGraph from "../Components/AreaChart";

export default function Statistics() {
  return (
    <div className="bg-light">
      <SideBar></SideBar>
        <div className="container">
          <h1 className="mt-4 mx-4">Statistics Dashboard</h1>
          <p className="my-1 mx-5">Monthly or Yearly Numbers</p>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <LineGraph></LineGraph>
        </div>
      <div className="bg-white">
        <div className="container d-flex justify-content-center align-items-center">
          <PieGraph></PieGraph>
          <BarGraph></BarGraph>
        </div>
        <div className="mx-5">
          <AreaGraph></AreaGraph>
        </div>
      </div>
   </div>
  )
}
