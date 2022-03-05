import React from "react";

export const Footer = ({darkMode}) => {
  return (
    <footer className={darkMode ? "dark" : ""}>
      "This product uses the TMDB API but is not endorsed or certified by TMDB."
    </footer>
  )
}

