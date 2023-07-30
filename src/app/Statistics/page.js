
import LineGraph from "../Components/LineGraph";
import SideBar from "../Components/SideBar";
import BarGraph from "../Components/BarGraph";
import PieGraph from "../Components/PieGraph";


export default function Statistics() {
  return (
    <div>
      <SideBar></SideBar>
      <PieGraph></PieGraph>
      <BarGraph></BarGraph>
      <LineGraph></LineGraph>
   </div>
  )
}
