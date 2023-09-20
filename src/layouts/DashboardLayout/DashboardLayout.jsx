import { NavLink, Outlet } from "react-router-dom";
import DashboardAside from "../DashboardAside/DashboardAside";


export default function DashboardLayout() {
  return (
    <>
      <nav className="rounded-md p-5 shadow-md bg-blue-100 mb-10 text-xl">
        <span className="hover:text-primary"><NavLink to="/">Home</NavLink></span> /
        <span className="hover:text-primary"><NavLink to="/dashboard"> Dashboard</NavLink></span>
      </nav>
      <div className="flex flex-col md:flex-row gap-10">
        <DashboardAside></DashboardAside>
        <main className="md:w-[80%] p-5 shadow-md rounded-md">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  )
}
