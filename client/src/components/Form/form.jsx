import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginPost } from "../../Store/loginSlice";
import { useNavigate } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, token } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginEvent = (e) => {
    e.preventDefault();

    let loginData = {
      email,
      password,
    };
    dispatch(loginPost(loginData));
  };

  useEffect(() => {
    if (token) {
      navigate("/user");
    }
  }, [token]);

  return (
    <form onSubmit={handleLoginEvent}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" disabled={loading}>
        Sign In
      </button>
    </form>
  );
}

export default Form;
