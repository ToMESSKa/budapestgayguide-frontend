import { css } from "@emotion/react";

export const mobileHeaderTitle = {
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

export const desktopHeaderTitle = {
  fontSize: "2rem",
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
};

export const desktopNavigation = {
  backgroundColor: "#333",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch",
  gap: "2rem",
  padding: "0 1rem",
};

export const desktopNavigationItemList = {
  padding: '0.5rem',
  margin: 0,
  listStyle: "none",
  display: "flex",
  gap: "1rem",
  fontSize: "2rem",
  alignItems: "center"
};

export const desktopNavigationLink = {
  color: "inherit",
  textDecoration: "none",
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: ".25rem",
  fontSize: "2rem",
};

export const hoverDesktopNavigationLink = {
  backgroundColor: "#444", // Change to your preferred hover color
};

export const hamburgerMenu = {
  bmBurgerButton: {
    position: "absolute",
    width: "35px",
    height: "30px",
    margin: "15px",
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
