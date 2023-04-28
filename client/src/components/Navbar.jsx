import React from "react";
import "../components/NavbarStyle.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li>
            {/* this will redirect to the main page */}
            <a href="/">Home</a>
          </li>
          <li>
            {/* change the file names bc someone else is making them */}
            <a href="About.jsx">About</a>
          </li>
          <li>
            <a href="Contact.jsx">Contact</a>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar;