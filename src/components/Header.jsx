import "react";
import hpLogo from "../images/hp-logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={hpLogo} className="logo-img" />
    </div>
  );
};

export default Header;
