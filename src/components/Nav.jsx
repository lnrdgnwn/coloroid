import { useState } from "react";
import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-10 py-3 border-b border-2 border-[#D1D0D0]">
      {/* Logo Coloroid */}
      <div className="flex items-center gap-3">
        <img
          src="images/logo/Coloroid-Logo.png"
          alt="Coloroid Logo"
          className="w-14"
        />
        <img
          src="images/logo/Coloroid-Text.png"
          alt="Coloroid Logo"
          className="w-50"
        />
      </div>

      {/* Hamburger */}

      {/* Desktop Navigation */}
      <ul className="flex items-center justify-between gap-10">
        <li className="flex items-center h-12">
          <NavLink to={"/"} className={"flex items-center h-full"}>
            Explore
          </NavLink>
        </li>
        <li className="flex items-center h-12">
          <NavLink to={"/generate"} className={"flex items-center h-full"}>
            Generate
          </NavLink>
        </li>
        <li className="flex items-center h-12">
          <NavLink to={"/gradient"} className={"flex items-center h-full"}>
            Gradient
          </NavLink>
        </li>
        <li className="flex items-center h-12">
          <NavLink to={"/contact"} className={"flex items-center h-full"}>
            Contact
          </NavLink>
        </li>
      </ul>
      {/* Mobile Navigation */}
    </nav>
  );
}
