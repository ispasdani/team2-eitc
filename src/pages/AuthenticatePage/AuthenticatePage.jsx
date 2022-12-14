import "./authenticatePage.css";
import { Login } from "../../components/LoginComponent/Login";
import { CreateAccount } from "../../components/CreateAccountComponent/CreateAccount";
import AuthenticateImg from "../../assets/authenticateImg.svg";

export const AuthenticatePage = () => {
  return (
    <div className="authenticate-container">
      <div className="authenticate-content">
        <div className="authenticate-upper-side">
          <img
            src={AuthenticateImg}
            className="authenticate-img"
            alt="authenticate-img"
          />
        </div>
        <div className="authenticate-down-side">
          <div className="down-left-side">
            <Login />
          </div>
          <div className="down-right-side">
            <CreateAccount />
          </div>
        </div>
      </div>
    </div>
  );
};
