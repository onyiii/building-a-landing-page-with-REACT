import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="heading">
      <div>
        <img src="./images/logo.png" className="logo" alt="logo" />
      </div>

      <div className="companyName">
        <p className="firstLine">
          <strong>Lorem Ipsum</strong>
        </p>
        Lorem, ipsum dolor.
      </div>
      <nav className="navbar">
        <button id="btn">
          <FaAlignJustify />
        </button>
        <ul className="links">
          <li>
            <a href="/download">Download Package</a>
          </li>
          <li>
            <a href="/download">Login</a>
          </li>
          <li>
            <a href="/download">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
