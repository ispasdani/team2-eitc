import "./login.css";
import { useState, useContext } from "react";
import { isLoggedInContext } from "../../contexts/isLoggedIn";

export const Login = () => {
  // static data
  const staticAdmin = "admin";
  const staticPassword = "123456";

  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { setIsLoggedIn } = useContext(isLoggedInContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loginUserName === staticAdmin && loginPassword === staticPassword) {
      setIsLoggedIn(true);
    }

    setLoginUserName("");
    setLoginPassword("");
  };

  return (
    <div className="login">
      <p className="login-title">Login</p>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="form-rows-container">
          <label htmlFor="accountName">Account</label>
          <input
            type="text"
            name="accountName"
            placeholder="Enter your account..."
            required
            onChange={(event) => setLoginUserName(event.target.value)}
            value={loginUserName}
          />
        </div>
        <div className="form-rows-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            required
            onChange={(event) => setLoginPassword(event.target.value)}
            value={loginPassword}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
