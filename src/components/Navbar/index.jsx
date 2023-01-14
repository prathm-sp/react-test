import { Link } from "react-router-dom";
import "./style.css";

export default function ButtonAppBar() {
  return (
    <div className="nav-container">
      <Link to="/">
        <span className="app-logo">APP LOGO</span>
      </Link>
      <div className="right-content">
        <Link to="/">
          <span>DASHBOARD</span>
        </Link>
        <Link to="/select-ad-type">
          <span> CREATE ADS</span>
        </Link>
      </div>
    </div>
  );
}
