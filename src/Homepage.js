import { MdLocationOn, MdCalendarToday, MdQueryBuilder } from "react-icons/md";

const Homepage = () => {
  return (
    <div className="home">
      <div className="theHome">
        <div className="writeUp">
          <h2>Lorem Ipsum Dolor Sit Amet Prodosalor.</h2>

          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis odio
            quidem sapiente, ullam iure dolor?
          </div>
        </div>
        <div className="base">
          <ul className="iconss">
            <li>
              <strong>Lorem, ipsum.</strong>
            </li>
            <li>
              <MdLocationOn />
              Location &emsp;&emsp;Palmgrove, Lagos
            </li>
            <li>
              <MdCalendarToday /> Start Date&emsp;&emsp; 16/04/2022
            </li>
            <li>
              <MdQueryBuilder />
              Duration&emsp;&emsp;16 weeks
            </li>
          </ul>
        </div>
      </div>

      <div className="registration">
        <p>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </strong>
        </p>
        <br />
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
