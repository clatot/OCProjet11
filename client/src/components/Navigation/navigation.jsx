import { Link } from "react-router-dom";
import SignStatus from "../SignStatus/signStatus";

function Navigation() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src="..\src\assets\images\argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <SignStatus />
    </nav>
  );
}

export default Navigation;
