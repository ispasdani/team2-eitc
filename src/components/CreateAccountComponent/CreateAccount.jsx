import "./createAccount.css";
import { useState } from "react";

export const CreateAccount = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div className="create-acc-container">
      <p className="create-acc-title">Create an Account</p>
      <form className="form-create-acc" onSubmit={handleSubmit}>
        <div className="form-row-container">
          <label htmlFor="enterName">Enter your name</label>
          <input
            type="text"
            name="enterName"
            placeholder="Enter your name..."
            required
            onChange={(event) => setEnteredName(event.target.value)}
            value={enteredName}
          />
        </div>
        <div className="form-row-container">
          <label htmlFor="enterPassword">Enter your password</label>
          <input
            type="password"
            name="enterPassword"
            placeholder="Enter your password..."
            required
            onChange={(event) => setEnteredPassword(event.target.value)}
            value={enteredPassword}
          />
        </div>
        <div className="form-row-container">
          <label htmlFor="enterEmail">Enter your Email</label>
          <input
            type="text"
            name="enterEmail"
            placeholder="Enter your email..."
            required
            onChange={(event) => setEnteredEmail(event.target.value)}
            value={enteredEmail}
          />
        </div>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
};
