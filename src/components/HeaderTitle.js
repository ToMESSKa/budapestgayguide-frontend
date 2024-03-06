import "../styles/NavigationBar.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function HeaderTitle() {
  return (
    <div className="nav">
      <header className="header-title">BUDAPEST GAY GUIDE</header>
    </div>
  );
}

export default HeaderTitle;
