'use client'
import SideBar from '../Components/SideBar';
import Table from '../Components/Table';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown } from 'react-bootstrap';

export default function Home() {
  const Card = ({ bg, header, icon, color, num}) => 
  (
        <div className={`card ${bg} my-4 mx-2 border p-3 bg-white rounded`}>
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
      <div className='border'>

      <SideBar></SideBar>
      </div>
      <div className='border border-1 bg-light my-5'>
        <div className="container d-flex justify-content-center my-3">
          <Card header="New Requests" num="12" icon="bi bi-bell-fill" color="text-primary"/>
          <Card header="Pending Permits" icon="bi bi-archive-fill" num="4"/>
          <Card header="Completed" icon="bi bi-check-lg" color="text-success" num="10"/>
          <Card header="Priority" icon="bi bi-exclamation-lg" color="text-danger" num="3"/>
        </div>
      </div>

      <div className='container mt-4'>
        <div className='row'>
          <div className='col'>

          </div> {/* An empty column to push the button to the right */}
          <div className='col-auto d-flex'>
          <Dropdown className='mx-3 border border-dark rounded'>
            <Dropdown.Toggle variant='white' id="dropdownMenuButton">
            <i className="bi bi-funnel text-dark"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">New</Dropdown.Item>
              <Dropdown.Item href="#">Pending</Dropdown.Item>
              <Dropdown.Item href="#">Priority</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            <button type="button" className="btn btn-primary"><i className="text-white bi bi-plus-lg"></i> Add Job </button>
          </div>
        </div>

        <div className='border rounded my-3'>

        <Table></Table>
        </div>
      </div>

    </div>
  );
}
