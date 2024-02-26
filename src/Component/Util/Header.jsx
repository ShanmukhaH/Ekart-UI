import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const Header = ({ isAuthenticated}) => {

  const{auth,setAuth}=useAuth();

  return (
    <header className="backgroundColor: bg-pink-400 p-6">
      <nav className="flex justify-between items-center">
        <Link className="ml-10 size-20" to={"/"}>
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
         {auth.isAuthenticated ?(
        <>
        {auth.role==='CUSTOMER' &&(
          <>
          <Link to="/logout" className="p-2 font-bold text-white">
          logout
        </Link>
          
          <Link to="/cart" className="p-2 font-bold text-white">
          Cart
        </Link>

        <Link to="/wishlist" className="p-2 font-bold text-white">
        Wishlist
      </Link>

      <Link to="/orders" className="p-2 font-bold text-white">
      Order
    </Link>
          </>
        )}
        {auth.role==='SELLER' &&(
          <>
          <Link to="/logout" className="p-2 font-bold text-white">
          logout
        </Link>

        
        <Link to="/seller-dashboard" className="p-2 font-bold text-white">
        SellerDashboard
      </Link>

      <Link to="/seller-orders" className="p-2 font-bold text-white">
      SellerOrder
    </Link>
          </>
        )}
        </>
         ):(
          <>
          <Link to="/login" className="p-2 font-bold text-white">
          Login
        </Link>

          <Link to="/seller" className="p-2 font-bold text-white">
          Became a Seller
        </Link>
        </>
         )}

        </div>
      </nav>
    </header>
  );
};

export default Header;
