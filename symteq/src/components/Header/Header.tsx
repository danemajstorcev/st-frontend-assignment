import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src="./symteq-website-logo.png" alt="symteq-logo" />
        </Link>
      </div>
      <div className="search-and-nav">
      <ul>
        <Link className="nav-link" to={"/"}>
          <li>Home</li>
        </Link>
        <Link className="nav-link" to={"/contact"}>
          <li>Contact</li>
        </Link>
        <Link className="nav-link" to={"/about-us"}>
          <li>About us</li>
        </Link>
      </ul>
      <div className="search-bar">
        <input name="search-bar" type="text" placeholder="&#xF002; Search invoice" />
      </div></div>
    </div>
  );
};

export default Header;
