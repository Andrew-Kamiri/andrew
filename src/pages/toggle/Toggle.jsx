import "./Toggle.scss";
import { Link } from "react-router-dom";

const Toggle = () => {
  return (
    <div className="toggle">
      <img
        src="https://s2.svgbox.net/social.svg?ic=ghost&color=000000"
        alt=""
        style={{ width: "2rem", alignSelf: "center" }}
      />
      <div className="items">
        <ul>
          <li>
            <Link to={"/home"}>
              <img
                src="https://s2.svgbox.net/social.svg?ic=fitbit&color=000000"
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <img
                src="https://s2.svgbox.net/social.svg?ic=genius&color=000000"
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to={"/home"}>
              <img
                src="https://s2.svgbox.net/social.svg?ic=instagram&color=000000"
                alt=""
              />
            </Link>
          </li>

          <li>
            <Link to={"/home"}>
              <img
                src="https://s2.svgbox.net/social.svg?ic=line&color=000000"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toggle;
