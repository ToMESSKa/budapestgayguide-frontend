import { css } from "@emotion/react";


export const mobileNavigationTitle = {
  display: "flex",
  height: "60px",
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  flexGrow: 1,
  minWidth: 0,
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
};

export const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "35px",
    height: "30px",
    margin:'15px'
  },
  bmBurgerBars: {
    background: "white",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#333",
    fontSize: "2em",
    height: "100%",
    overflow: "hidden",
  },

  bmItemList: {
    display: "block",
    padding: "3rem 0",
  },
  bmItem: {
    textDecoration: "none",
    color: "white",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
