import SideBar from './Components/SideBar';
import Table from './Components/Table';

export default function Home() {
  const Card = ({ borderClass, header, title, content, num }) => (
    <div className={`flex-grow-1 mx-5 card ${borderClass}`}>
      <div className="card-header">{header}</div>
      <div className={`card-body ${content}`}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center">{num}</p>
      </div>
    </div>
  );

  return (
    <div>
      <SideBar></SideBar>
      <div className="container d-flex justify-content-center my-3">
        <Card borderClass="border-primary" header="New Requests" content="text-primary" num="12" />
        <Card borderClass="border-secondary" header="Pending Permits" content="text-secondary" num="4"/>
        <Card borderClass="border-success" header="Completed" content="text-success" num="10"/>
        <Card borderClass="border-danger" header="Priority" content="text-danger" num="3"/>
      </div>
      <div className='container d-flex'>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>
        <select class="form-select-sm " aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input type="date"/>
      </div>
      <Table></Table>
    </div>
  );
}
