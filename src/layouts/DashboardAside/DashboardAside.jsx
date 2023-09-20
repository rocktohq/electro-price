import { NavLink } from "react-router-dom";

export default function DashboardAside() {
  return (
    <aside className="md:w-[20%] p-5 shadow-md rounded-md">
      <ul className="text-xl space-y-1">
        <li className="mb-5 text-blue-800"><NavLink to="/dashboard">💨 Dashboard</NavLink></li>
        <li><NavLink to="/dashboard/profile">👦 Profile</NavLink></li>
        <li><NavLink to="/dashboard/editprofile">💻 Edit Profile</NavLink></li>
      </ul>
    </aside>
  )
}
