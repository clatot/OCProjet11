import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Store/loginSlice";
import { profileClear } from "../../Store/profileSlice";

function SignStatus() {
  const { token } = useSelector((state) => state.login);
  const { userName } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(profileClear());
  };

  return token ? (
    <div>
      <Link className="main-nav-item" to={"/user"}>
        <i className="fa fa-user-circle"></i> {userName}
      </Link>
      <Link className="main-nav-item" to={"/"} onClick={handleSignOut}>
        <i className="fa fa-sign-out"></i> Sign Out
      </Link>
    </div>
  ) : (
    <div>
      <Link className="main-nav-item" to={"/sign"}>
        <i className="fa fa-user-circle"></i> Sign In
      </Link>
    </div>
  );
}

export default SignStatus;
