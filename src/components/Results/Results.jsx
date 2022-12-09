import "./results.css";
import pinLoc from "../../assets/pinLoc.svg";
import routeSvg from "../../assets/routeSvg.svg";

export const RouteResults = () => {
  return (
    <div className="results-container">
      <div className="route-left-side">
        <p className="route-titles">Cheapest Route</p>
        <div className="route-card">
          <div className="route-card-img-container">
            <img src={pinLoc} alt="pin-loc" className="pin-loc" />
          </div>
          <div className="route-card-first-row">
            <div>
              <div className="circle-status"></div>
              <p>In progress</p>
            </div>
            <p className="price">98 $</p>
          </div>
          <div className="route-card-second-row">
            <div className="route-card-second-row-left">
              <p className="city">Cairo</p>
              <p className="route-date">09 - 12 - 2022</p>
            </div>
            <span className="line"></span>
            <div className="route-card-second-row-right">
              <p className="city">Tanger</p>
              <p className="route-date">16 - 12 - 2022</p>
            </div>
          </div>
          <div className="route-card-third-row">
            <img src={routeSvg} alt="route-svg" className="route-img" />
            <p className="start-point">Cairo</p>
            <p className="middle-point">Tripoli</p>
            <p className="end-point">Tanger</p>
          </div>
        </div>
      </div>
      <div className="route-right-side">
        <p className="route-titles">Fastest Route</p>
        <div className="route-card">
          <div className="route-card-img-container">
            <img src={pinLoc} alt="pin-loc" className="pin-loc" />
          </div>
          <div className="route-card-first-row">
            <div>
              <div className="circle-status"></div>
              <p>In progress</p>
            </div>
            <p className="price">190 $</p>
          </div>
          <div className="route-card-second-row">
            <div className="route-card-second-row-left">
              <p className="city">Cairo</p>
              <p className="route-date">09 - 12 - 2022</p>
            </div>
            <span className="line"></span>
            <div className="route-card-second-row-right">
              <p className="city">Tanger</p>
              <p className="route-date">11 - 12 - 2022</p>
            </div>
          </div>
          <div className="route-card-third-row">
            <img src={routeSvg} alt="route-svg" className="route-img" />
            <p className="start-point">Cairo</p>
            <p className="middle-point">Tripoli</p>
            <p className="end-point">Tanger</p>
          </div>
        </div>
      </div>
    </div>
  );
};
