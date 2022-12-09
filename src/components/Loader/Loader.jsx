import "./loader.css";
import loaderLogo from "../../assets/loaderLogo.png";

export const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loaderLogo} alt="loader-logo" className="loader-logo" />
      <div className="loader"></div>
    </div>
  );
};
