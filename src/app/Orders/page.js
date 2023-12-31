"use client";

import SideBar from "../Components/SideBar";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Orders() {

  const Card = ({info, bg, tc, width, background, type, height}) => (
    <div className={`card  text-${tc} bg-${bg} mb-3 `} style={{width:`${width}`, backgroundColor:`${background}`, height:`${height}`, backgroundColor:"#FF6969"}}>
      <div className="card-body">
        <h6 className="card-header" style={{textAlign:"center", fontSize:"0.8rem", marginTop:"1%", color:"#582525"}}>{type}</h6>
        <h4 className="card-title text-center" style={{marginTop:"2%", textAlign:"center", color:"#582525"}}>{info}</h4>
      </div>
    </div>
  )

  const Files = ({type, width, bg, icon}) => (
    <div className={` mx-3 card border border-success  bg-${bg} mb-3 `} style={{width:`${width}`}}>
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
      <div className="border">
      <SideBar></SideBar>
      </div>
      <div className="card border shadow-lg container mt-4" style={{width:"50%", border: "none"}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row", gap:"5%"}}>
          <div className="card " style={{display:"flex", alignItems:"center", justifyContent:"center", width:"60%", marginTop:"2rem", marginBottom:"2rem"}}>
            <div className="card-title" style={{fontSize:"2rem", marginRight:"auto", marginLeft:"5%", marginTop:"2%"}}>Enmax</div>
            <div className="card-body" style={{display:"flex", alignItems:"center", justifyContent:"space-around", gap:"5%", width:"90%"}}>
            <div style={{display: "flex"}}>
            <div style={{display: "flex"}}>
              <fieldset disabled style={{marginRight: "20px"}}>
                <label for="exampleInputEmail1">ID:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="1"/>
              </fieldset>

              <fieldset disabled>
                <label for="exampleInputDate" style={{marginRight: "5px"}}>Date:</label>
                <input type="email" class="form-control" id="exampleInputDate" aria-describedby="emailHelp" placeholder="01/23/2023"/>
              </fieldset>
            </div>
            </div>
            </div>
          </div>
          <div>
            <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png" style={{height:"8rem"}}></img>
          </div>
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row", gap:"3%", marginLeft:"3%", marginRight:"2%"}}>
          <div className="card border" style={{display:"flex", alignItems:"center", justifyContent:"center", width:"50%", marginBottom:"2rem", border: "none"}}>
            <div className="card-title" style={{fontSize:"1.5rem", marginRight:"auto", marginLeft:"5%", marginTop:"2%"}}>1 LL 11 Ave 2-4 ST SW</div>
            <fieldset className="mt-3" disabled>
                <label for="exampleInputDate" style={{marginRight: "5px"}}>Permit/Request#:</label>
                <input type="email" class="form-control" id="exampleInputDate" aria-describedby="emailHelp" placeholder="@SU-232-23232"/>
            </fieldset>
            <fieldset className="my-3" disabled>
                <label for="exampleInputDate" style={{marginRight: "5px"}}>WO#:</label>
                <input type="email" class="form-control" id="exampleInputDate" aria-describedby="emailHelp" placeholder="@SU-232-23232"/>
            </fieldset>
            <fieldset className="mb-5" disabled>
                <label for="exampleInputDate" style={{marginRight: "5px"}}>PO#:</label>
                <input type="email" class="form-control" id="exampleInputDate" aria-describedby="emailHelp" placeholder="@SU-232-23232"/>
            </fieldset>
          </div>
          <div style={{marginTop:"1rem", marginBottom:"2rem"}}>
            <Card info="Priority" type="Status" width="20rem"></Card>
            <div class="card">
              <div class="card-header">Notes</div>
              <div class="card-body">
                  <input type="email" class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Stamped"/>
              </div>
            </div>
            <div className="card text-center" width="20rem" height="19rem">
            </div>
          </div>
        </div>
        <div style={{marginBottom:"3rem"}}>
          <div className="card " style={{width:"83%", margin:"auto"}}>
            <div className="card-title" style={{fontSize:"1.5rem", marginRight:"auto", marginLeft:"5%", marginTop:"2%"}}>Files</div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
              <Files type="Permit Confirmation" width="14rem" icon="bi bi-clipboard2-check"></Files>
              <div class="mb-3 mx-auto">
                <label for="formFileDisabled" class="form-label">Permit</label>
                <input class="form-control" type="file" id="formFileDisabled"/>
              </div>
              <div class="mb-3 mx-4">
                <label for="formFileDisabled" class="form-label">Map Drawing</label>
                <input class="form-control" type="file" id="formFileDisabled"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
