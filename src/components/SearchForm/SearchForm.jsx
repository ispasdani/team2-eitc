import { useState } from "react";
import "./searchForm.css";
import { ShipIcon } from "../../assets/shipIcon";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
  const [destinationFrom, setDestinationFrom] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [date, setDate] = useState("");
  const [cargoType, setCargoType] = useState("");
  const [cargoWeight, setCargoWeight] = useState("");
  const [cargoSize, setCargoSize] = useState("");
  const navigate = useNavigate();

  const navigateToResults = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();

    setDestinationFrom("");
    setDestinationTo("");
    setDate("");
    setCargoType("");
    setCargoWeight("");
    setCargoSize("");
    navigate("/team2-eitc/results");
  };

  return (
    <div className="search-form-container">
      <form className="form-search-route" onSubmit={handleSubmit}>
        <ShipIcon />

        <div className="destination-container">
          <div className="destination-from">
            <label htmlFor="from" className="label-same-form">
              From
            </label>
            <input
              type="text"
              name="from"
              placeholder="Enter starting point..."
              required
              className="same-input-form"
              onChange={(event) => setDestinationFrom(event.target.value)}
              value={destinationFrom}
            />
          </div>
          <div className="destination-to">
            <label htmlFor="to" className="label-same-form">
              To
            </label>
            <input
              type="text"
              name="to"
              placeholder="Enter starting point..."
              required
              className="same-input-form"
              onChange={(event) => setDestinationTo(event.target.value)}
              value={destinationTo}
            />
          </div>
        </div>

        <div className="date-container">
          <label htmlFor="date" className="label-same-form">
            Enter starting date
          </label>
          <input
            type="date"
            name="date"
            placeholder="Enter starting date..."
            required
            className="same-input-form"
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </div>

        <div className="cargo-container">
          <div className="cargo-type-container">
            <label htmlFor="cargo-type" className="label-same-form">
              Cargo type
            </label>
            <input
              type="text"
              name="cargo-type"
              placeholder="Enter cargo type..."
              required
              className="same-input-form"
              onChange={(event) => setCargoType(event.target.value)}
              value={cargoType}
            />
          </div>
          <div className="cargo-weight-container">
            <label htmlFor="cargo-weight" className="label-same-form">
              Cargo weight
            </label>
            <input
              type="text"
              name="cargo-weight"
              placeholder="Specify cargo weight..."
              className="same-input-form"
              required
              onChange={(event) => setCargoSize(event.target.value)}
              value={cargoSize}
            />
          </div>
        </div>

        <div className="cargo-size-container">
          <label htmlFor="cargo-size" className="label-same-form">
            Cargo dimensions
          </label>
          <input
            type="text"
            name="cargo-size"
            placeholder="Enter cargo dimensions..."
            required
            className="same-input-form"
            onChange={(event) => setCargoWeight(event.target.value)}
            value={cargoWeight}
          />
        </div>

        <div className="additional-container">
          <p className="additional-title">Additional services:</p>
          <div className="services-row">
            <div className="services-col">
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Temperature</label>
              </div>
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Animals</label>
              </div>
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Weapons</label>
              </div>
            </div>
            <div className="services-col">
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Insurance</label>
              </div>
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Warehousing</label>
              </div>
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Cautions</label>
              </div>
            </div>
            <div className="services-col">
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Wood</label>
              </div>
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Waste</label>
              </div>
              <div>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Convoy or escort</label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="search-route-button">
          Search for route
        </button>
      </form>
    </div>
  );
};
