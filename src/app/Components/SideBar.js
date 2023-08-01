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
  )
}
