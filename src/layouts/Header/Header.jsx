import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header className="max-w-screen-2xl mx-auto px-2 shadow-md py-5">
      <nav className="flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-4xl font-bold">📱<span className="text-gray-500">Mobile</span><span className="text-primary">Price</span></h1>
        </NavLink>
        <ul className=" font-medium flex items-center">
          <li><NavLink to="/" className="btn btn-ghost btn-sm text-xl rounded">Home</NavLink></li>
          <li><NavLink to="/products" className="btn btn-ghost btn-sm text-xl rounded">Products</NavLink></li>
          <li><NavLink to="/dashboard" className="btn btn-ghost btn-sm text-xl rounded">Dashboard</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
