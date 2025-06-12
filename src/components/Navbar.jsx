import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-indigo-600 p-4 text-white shadow-md flex justify-between">
    <div className="font-bold text-xl">MySite</div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/about" className="hover:text-gray-300">About</Link>
      <Link to="/login" className="hover:text-gray-300">Login</Link>
    </div>
  </nav>
);

export default Navbar;
