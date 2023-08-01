'use client'
import SideBar from './Components/SideBar';
import Table from './Components/Table';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown } from 'react-bootstrap';

export default function Home() {
  const Card = ({ bg, header, icon, color, num}) => 
  (
        <div className={`card ${bg} my-4 mx-2 shadow border-white p-3 bg-white rounded`}>
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className={`${icon} mx-3 ${color}`} style={{ fontSize: "2rem" }}></i>
                </div>
                <div className='mx-3'></div>
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
      <div style={{display:"flex", flexDirection:"row"}}>
        <SideBar></SideBar>
        <div>
          <div>
            <div className="container">
              <h1 className="mx-4">Admin Dashboard</h1>
            </div>
            <div className="container d-flex justify-content-center align-items-center" style={{display:"flex", flexDirection:"row"}}>
                <LineGraph></LineGraph>
              <div>
                <BarGraph></BarGraph>
                <PieGraph></PieGraph>
              </div>
              <div className='container mt-4'>
              <div className='row'>
                <div className='col'></div> {/* An empty column to push the button to the right */}
                <div className='col-auto d-flex'>
                  <a href='/Table'>See more</a>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
