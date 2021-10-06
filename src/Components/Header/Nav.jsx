import React from "react";
import "./Nav.css";
import Logo from "../../media/logo_light.svg";
import phone from "../../media/phone.svg";
import cart from "../../media/cart.svg";
import { Link } from "react-router-dom";

export default function Nav({ transparent }) {
  const tClass = transparent ? " bg-opacity-0" : " bg-nav";
  return (
    <nav className={"p-5" + tClass}>
      <div className="max-wide mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo Maynooth" className="h-9" />
        </Link>
        <div className="flex items-center text-white text-opacity-60">
          <div className="space-x-8 mr-8 font-light text-sm">
            <Link to="/category/livingroom">Living Room</Link>
            <Link to="/category/livingroom">Living Room</Link>
            <Link to="/category/livingroom">Living Room</Link>
          </div>
          <div className="flex items-center space-x-2 border-l border-white pl-4">
            <img src={phone} alt="Contact" className="h-5" />
            <img src={cart} alt="Cart" className="h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}
