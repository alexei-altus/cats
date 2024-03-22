import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Cats
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <Link to="/cats" className="py-2 px-2 font-medium text-gray-500">
              Normal List
            </Link>
            <Link to="/cats/infinite" className="py-2 px-2 font-medium text-gray-500">
              Infinite Scroll
            </Link>
            <Link to="/searchParams" className="py-2 px-2 font-medium text-gray-500">
              Search Params
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
