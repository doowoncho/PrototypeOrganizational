import SideBar from './Components/SideBar';
import Table from './Components/Table';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  const Card = ({ bg, header, icon, color, num}) => 
  (
        <div className={`card ${bg} mx-2 shadow-sm p-3 mb-5 bg-white rounded`}>
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="align-self-center">
                  <i className={`${icon} mx-3 ${color}`} style={{ fontSize: "2rem" }}></i>
                </div>
                <div className='mx-3'></div>
                  <div className={color}>
                    <h3 className='text-center'>{num}</h3>
                    <span>{header}</span>
                  </div>
              </div>
            </div>
          </div>
      </div>
  );

  return (
    <div>
      <SideBar></SideBar>
      <div className="container d-flex justify-content-center my-3">
        <Card header="New Requests" num="12" icon="bi bi-bell-fill" color="text-primary" />
        <Card header="Pending Permits" icon="bi bi-archive-fill" num="4"/>
        <Card header="Completed" icon="bi bi-check-lg" color="text-success" num="10"/>
        <Card header="Priority" icon="bi bi-exclamation-lg" color="text-danger" num="3"/>
      </div>
      <button type="button" class="btn btn-primary"><i class="bi bi-plus-lg"></i> Add Job </button>

      <Table></Table>
    </div>
  );
}
