import { MdLocationOn, MdCalendarToday, MdQueryBuilder } from "react-icons/md";

const Homepage = () => {
  return (
    <div className="home">
      <div className="theHome">
        <div className="writeUp">
          <h1>Lorem Ipsum Dolor Sit Amet Prodosalor.</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis odio
            quidem sapiente, ullam iure dolor?
          </span>
        </div>
        <div className="base">
          <div>
            <ul className="iconss">
              <li>
                <strong>Lorem, ipsum.</strong>
              </li>
              <li>
                <MdLocationOn />
                Location
              </li>
              <li>
                <MdCalendarToday /> Start Date
              </li>
              <li>
                <MdQueryBuilder />
                Duration
              </li>
            </ul>
          </div>
          <div className="others">
            Palmgrove, Lagos <br />
            16/04/2022 <br />
            16 weeks
          </div>
        </div>
      </div>
      <div className="registration">
        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </strong>
        </p>
        <form className="form">
          <label for="firstName">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="firstname"
            />
          </label>

          <label for="lastName">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="lastname"
            />
          </label>
          <br />

          <label for="email">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="email"
            />
          </label>
          <br />

          <label for="mobile">
            <input
              type="tel"
              id="mobile"
              placeholder="Phone Number"
              className="mobile"
            />
            <button type="submit" className="submit">
              Get Program Package
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
