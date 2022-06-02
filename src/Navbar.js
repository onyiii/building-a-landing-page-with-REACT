const Navbar = () => {
  return (
    <nav className="main-heading">
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
      </div>
      <div className="navbar">
        <ul className="links">
          <li>
            <a href="/download">Download Package</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/Register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
