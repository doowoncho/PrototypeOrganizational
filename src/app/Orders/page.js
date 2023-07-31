"use client";

import SideBar from "../Components/SideBar";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Orders() {

  const Card = ({info, bg, tc, width, background, type, height}) => (
    <div className={`card shadow text-${tc} bg-${bg} mb-3 `} style={{width:`${width}`, backgroundColor:`${background}`, height:`${height}`}}>
      <div className="card-body">
        <h6 className="card-header" style={{textAlign:"center", fontSize:"0.8rem", marginTop:"1%"}}>{type}</h6>
        <h4 className="card-title text-center" style={{marginTop:"2%", textAlign:"center"}}>{info}</h4>
      </div>
    </div>
  )

  const Files = ({type, width, bg, icon}) => (
    <div className={`card shadow bg-${bg} mb-3 `} style={{width:`${width}`}}>
      <div className="card-body">
        <h6 className="card-header" style={{textAlign:"center", fontSize:"0.8rem", marginTop:"1%"}}>{type}</h6>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <i className={`${icon}`} style={{ fontSize: "2rem" }}></i>
        </div>
      </div>
    </div>
  )
  

  return (
    <div>
      <SideBar></SideBar>
      <div className="card bg-light" style={{width:"75%", margin:"auto", marginBottom:"2rem"}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row", gap:"5%"}}>
          <div className="card shadow" style={{display:"flex", alignItems:"center", justifyContent:"center", width:"60%", marginTop:"2rem", marginBottom:"2rem"}}>
            <div className="card-title" style={{fontSize:"2rem", marginRight:"auto", marginLeft:"5%", marginTop:"2%"}}>Emmex</div>
            <div className="card-body" style={{display:"flex", alignItems:"center", justifyContent:"space-around", gap:"5%", width:"90%"}}>
              <Card info="1" bg="light" tc="black" width="10rem" type="ID"></Card>
              <Card info="01/21/2023" bg="light" tc="black" width="10rem" type="Date"></Card>
            </div>
          </div>
          <div>
            <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png" style={{height:"8rem"}}></img>
          </div>
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row", gap:"5%", marginLeft:"2%", marginRight:"2%"}}>
          <div className="card shadow" style={{backgroundColor:"#9BBFF5", display:"flex", alignItems:"center", justifyContent:"center", width:"50%", marginBottom:"2rem"}}>
            <div className="card-title" style={{fontSize:"1.5rem", marginRight:"auto", marginLeft:"5%", marginTop:"2%"}}>1 LL 11 Ave 2-4 ST SW</div>
            <Card info="@SU-232-23232" width="14rem" type="Permit/Request#" bg="light"></Card>
            <Card info="321312312" bg="light" width="14rem" type="WO"></Card>
            <Card info="MX1-2323232" bg="light" width="14rem" type="PO"></Card>
          </div>
          <div style={{marginTop:"1rem", marginBottom:"2rem"}}>
            <Card info="New" bg="warning" type="Status" width="20rem"></Card>
            <Card info="Stamped" bg="light" type="Notes" width="20rem" height="19rem"></Card>
          </div>
        </div>
        <div style={{marginBottom:"3rem"}}>
          <div className="card shadow" style={{backgroundColor:"#F6FCFF", width:"80%", margin:"auto"}}>
            <div className="card-title" style={{fontSize:"1.5rem", marginRight:"auto", marginLeft:"5%", marginTop:"2%"}}>Files</div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
              <Files type="Permit Confirmation" width="14rem" bg="light" icon="bi bi-clipboard2-check"></Files>
              <Files type="Permit" width="14rem" bg="light" icon="bi bi-clipboard2-minus"></Files>
              <Files type="Drawing" width="14rem" bg="light" icon="bi bi-clipboard2-x"></Files>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
