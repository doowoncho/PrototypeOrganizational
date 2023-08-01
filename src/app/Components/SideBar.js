"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Link from 'next/link';

export default function SideBar() {
  return (
    <Sidebar style={{height:"100%", width:"5rem", position:"fixed"}}>
      <Menu className='my-4'>
        <MenuItem component={<Link href="/" />}>Home</MenuItem>
        <MenuItem component={<Link href="/Statistics" />}>Statistics</MenuItem>
        <MenuItem component={<Link href="/Table" />}>Table</MenuItem>
      </Menu>
    </Sidebar>
  //   <div id="navbar" style={{height:"100vh"}}> 
  //       <nav className="navbar navbar-expand-lg mx-4 bg-white">
  //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //           <div className="navbar-nav mx-4" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
  //             <a className="nav-item nav-link active" href="/">Home</a>
  //             <a className="nav-item nav-link" href="/Statistics">Statistics</a>
  //           </div>
  //         </div>
  //       </nav>
  //  </div>
  // <div class="position-fixed ">
  //   <div class="row">
  //           <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
  //               <a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
  //                   <i class="bi-bootstrap fs-1"></i>
  //               </a>
  //               <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
  //                   <li class="nav-item">
  //                       <a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
  //                           <i class="bi-house fs-1"></i>
  //                       </a>
  //                   </li>
  //                   <li>
  //                       <a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
  //                           <i class="bi-speedometer2 fs-1"></i>
  //                       </a>
  //                   </li>
  //                   <li>
  //                       <a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
  //                           <i class="bi-table fs-1"></i>
  //                       </a>
  //                   </li>
  //               </ul>
  //           </div>
  //       </div>
  //   </div>
  )
}
