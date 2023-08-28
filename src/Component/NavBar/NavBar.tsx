import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 py-4 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold uppercase">
            Forms
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
