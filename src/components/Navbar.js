import React from "react";

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={darkMode ? "dark" : ""}>
      <h1 className="nav--title">・ react movie search ・</h1>


      <div className="toggler">
        <p className="toggler--light">🌝</p>

        <div
          className="toggler--slider"
          onClick={toggleDarkMode}
        >
          <div className="toggler--slider-circle"></div>
        </div>

        <p className="toggler--dark">🌛</p>

      </div>
    </nav>
  )
}