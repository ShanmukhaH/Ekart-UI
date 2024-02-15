import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated }) => {
  return (
    <header className="backgroundColor: bg-pink-400 p-6">
      <nav className="flex justify-between items-center">
        <Link className="ml-10 size-20">
          <img
            src=" https://static.vecteezy.com/system/resources/previews/014/322/497/original/shopping-cart-icons-design-in-blue-circle-png.png "
            alt="logo"
          />
        </Link>
        {/* Serach Bar*/}
        <div>
          <input
            type="text"
            placeholder="Search for product,catoriges,etc..."
            className="p-3 w-96 rounded-xl"
          />
        </div>

        {/* Link block*/}
        <div className="flex items-center space-x-4">
          {/*Login */}

          <Link to="/login" className="p-2 font-bold text-white">
            Login
          </Link>

          {/* Became Seller Option*/}
          <Link to="/seller" className="p-2 font-bold text-white">
            Became a Seller
          </Link>

          {/*cart */}
          <Link to="/cart" className="p-2 font-bold text-white">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
