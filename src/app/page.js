'use client'
import BarGraph from './Components/BarGraph';
import LineGraph from './Components/LineGraph';
import PieGraph from './Components/PieGraph';
import SideBar from './Components/SideBar';
import Table from './Components/Table';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown } from 'react-bootstrap';

export default function Home() {
  const Card = ({ bg, header, icon, color, num}) => 
  (
        <div className={`card ${bg} my-4 mx-2 border bg-white rounded`}>
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className={`${icon} mx-3 ${color}`} style={{ fontSize: "2rem" }}></i>
                </div>
                <div className='mx-1'></div>
                  <div>
                    <h3 className={`text-center ${color}`}>{num}</h3>
                    <span className={color}>{header}</span>
                  </div>
              </div>
            </div>
          </div>
      </div>
  );

  
  return (
    <div>
      <div style={{display:"flex", flexDirection:"row", gap:"12%"}}>
        <div className="border">
          <SideBar></SideBar>
        </div>
        <div className ="container">
          <div>
            <div className="container">
              <h1 className="mt-5">Admin Dashboard</h1>
            </div>
            <div className=" d-flex justify-content-center">
              <div className='container'>
                <LineGraph></LineGraph>
              </div>
              <div className='container'>
                <BarGraph></BarGraph>
                <PieGraph></PieGraph>
              </div>
              <div className='container mt-4'>
              <div className='row'>
                <div className='col'></div> {/* An empty column to push the button to the right */}
              </div>
              </div>
            </div>
                <div className='my-3 d-flex border'>     
                  <Table></Table>
                  <div >
                    <div className="container justify-content-center my-3">
                      <Card header="New Requests" num="12" icon="bi bi-bell-fill" color="text-primary"/>
                      <Card header="Completed" icon="bi bi-check-lg" color="text-success" num="10"/>
                      <Card header="Priority" icon="bi bi-exclamation-lg" color="text-danger" num="3"/>
                    </div>
                <div className='col-auto d-flex mx-4 mt-5'>
                  <a href='/Table'>See more</a>
                </div>
                  </div>
                </div>
          </div>
        </div>

      </div>
    </div>
  );
}
