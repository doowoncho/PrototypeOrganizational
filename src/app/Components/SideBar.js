"use client";
import { SUBRESOURCE_INTEGRITY_MANIFEST } from 'next/dist/shared/lib/constants';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Link from 'next/link';


export default function SideBar() {
  return (
    <Sidebar style={{height:"100vh", width:"5rem"}}>
      <Menu>
        <MenuItem component={<Link href="/" />}>Home</MenuItem>
        <MenuItem component={<Link href="/Statistics" />}>Statistics</MenuItem>
        <MenuItem component={<Link href="/Table" />}>Table</MenuItem>
      </Menu>
    </Sidebar>
  )
}
