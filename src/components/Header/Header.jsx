import { images } from "../../images";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <img src={images.Logo} alt="panopticonism-logo" />
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <FontAwesomeIcon size="xl" color="white" icon={faBars} />
        </label>
        <ul>
          <li>
            <a href="#steps">What I can do</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#packages">Packages</a>
          </li>
          <li className="hire_me">
            <a href="#hire_me">Hire me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
