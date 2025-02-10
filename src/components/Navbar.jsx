import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-6 text-white">
        <li>
          <Link to="/" className="hover:text-gray-200">Dashboard</Link>
        </li>
        <li>
          <Link to="/task/1" className="hover:text-gray-200">Task Details</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
