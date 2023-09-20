import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-2 py-5 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; <Link to="/">MobilePrice</Link> 2023</p>
        <ul className="flex items-center gap-5">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="license">Licensing</Link></li>
          <li><Link to="/contact">Conatct</Link></li>
        </ul>
      </div>
    </footer>
  )
}
