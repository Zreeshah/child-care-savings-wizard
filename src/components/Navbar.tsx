
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="text-secondary mr-1">Tax-Free</span> Childcare Calculator
          </Link>
        </div>
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/" className="text-gray-800 hover:text-primary transition-colors">
            Calculator
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-primary transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
