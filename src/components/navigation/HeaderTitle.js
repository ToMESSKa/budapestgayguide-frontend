//import "../styles/NavigationBar.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function HeaderTitle(props) {
  return (
      <header style={props.style} className="header-title">BUDAPEST PHAG GUIDE</header>
  );
}

export default HeaderTitle;
