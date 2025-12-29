import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <img src="https://codehubnexus.com/assets/logov2.png" alt="as" />
      <div className="links">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/Search"}>Search</NavLink>
          </li>
          <li>
            <NavLink to={"/Product"}>Product</NavLink>
          </li>
          <li>
            <NavLink to={"/Cart"}>Cart</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
