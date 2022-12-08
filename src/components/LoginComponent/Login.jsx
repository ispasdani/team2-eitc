import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <form>
        <div className="form-rows-container">
          <label htmlFor="accountName">Account</label>
          <input
            type="text"
            name="accountName"
            placeholder="Enter your account..."
            required
          />
        </div>
        <div className="form-rows-container">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Enter your password..."
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
