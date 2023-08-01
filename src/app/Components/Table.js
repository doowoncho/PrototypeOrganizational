
export default function Table() {
  return (
    <div>
      <div className='container my-4'>
          <table id="table" className="table table-hover">
            <thead>
                <tr>
                    <th scope="col" className='fw-normal bg-'>ID</th>
                    <th scope="col" className='fw-normal'>Date</th>
                    <th scope="col" className='fw-normal'>Status</th>
                    <th scope="col" className='fw-normal'>Setup</th>
                    <th scope="col" className='fw-normal'>Customer</th>
                    <th scope="col" className='fw-normal'>Permit/Request#</th>
                    <th scope="col" className='fw-normal'>Notes</th>
                    <th scope="col" className='fw-normal'>WO#</th>
                    <th scope="col" className='fw-normal'>PO#</th>
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td><a href='/Orders'>1</a></td>
                    <td>01/21/2023</td>
                    <td>Priority</td>
                    <td>1 LL 11 Ave 2-4 ST SW</td>
                    <td>Enmax</td>
                    <td>@SU-232-23232</td>
                    <td>Stamped</td>
                    <td>321312312</td>
                    <td>MX1-2323232</td>
                </tr>
                <tr>
                <   td><a href='/Orders'>2</a></td>
                    <td>02/15/2023</td>
                    <td>Completed</td>
                    <td>5 Elm St, Apt 4B</td>
                    <td>ABC Electric</td>
                    <td>@SU-121-32321</td>
                    <td>In Progress</td>
                    <td>432543654</td>
                    <td>ELX-323211</td>
                </tr>
                <tr>
                    <td><a href='/Orders'>3</a></td>
                    <td>03/05/2023</td>
                    <td>Set-up</td>
                    <td>123 Main St</td>
                    <td>XYZ Plumbing</td>
                    <td>@SU-343-98821</td>
                    <td>Completed</td>
                    <td>765432123</td>
                    <td>PXZ-345622</td>
                </tr>
                <tr>
                    <td><a href='/Orders'>4</a></td>
                    <td>04/02/2023</td>
                    <td>Completed</td>
                    <td>15 Oak Ave</td>
                    <td>Smith HVAC</td>
                    <td>@SU-109-76789</td>
                    <td>Delayed</td>
                    <td>187654321</td>
                    <td>HVAC-908712</td>
                </tr>
                <tr>
                    <td><a href='/Orders'>5</a></td>
                    <td>05/10/2023</td>
                    <td>Priority</td>
                    <td>8 Maple Rd</td>
                    <td>Quality Home Inspectors</td>
                    <td>@SU-515-45687</td>
                    <td>On Hold</td>
                    <td>908712345</td>
                    <td>QHI-523123</td>
                </tr>
                <tr>
                    <td><a href='/Orders'>6</a></td>
                    <td>06/20/2023</td>
                    <td>Set-up</td>
                    <td>77 Willow Lane</td>
                    <td>Renovation Pros</td>
                    <td>@SU-900-14562</td>
                    <td>Not Started</td>
                    <td>891234567</td>
                    <td>RP-145623</td>
                </tr>
            </tbody>
          </table>
       </div>
   </div>
  )
}
