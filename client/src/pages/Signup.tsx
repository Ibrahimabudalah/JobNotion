import { useState } from "react";
import axios from "axios";
import signupImage from "../assets/images/signup.svg";
import { error } from "console";

export default function Signup() {
  const userSignupAPI = process.env.REACT_APP_USER_POSTING_API;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const signupData = new FormData();
  signupData.append("firstName", firstName);
  signupData.append("lastName", lastName);
  signupData.append("email", email);
  signupData.append("password", password);

  const handleSignupSubmit = async (e: any) => {
    e.preventDefault();

    if (!userSignupAPI) {
      throw new Error("Missing REACT_APP_USER_POSTING_API");
    }

    try {
      await axios.post(userSignupAPI, signupData).then(function (res) {
        console.log(res.data);
      });
    } catch (e: any) {
      if (e.response) {
        if (e.response.status === 409) {
          setErrorMessage("This email is already registered.");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      } else {
        setErrorMessage("Network error. Please try again.");
      }
      console.log(errorMessage);
    }
  };

  return (
    <main className="flex flex-col items-center justify-evenly">
      <img src={signupImage} alt="Signup Image" className="h-2/3 w-2/3" />
      <form
        method="POST"
        className="flex flex-col gap-4"
        onSubmit={handleSignupSubmit}
      >
        <section className="flex justify-between gap-6">
          <div className="flex flex-col w-1/2">
            <label className="listing-label">First Name</label>
            <input
              type="text"
              className="listing-input"
              name="firstName"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="listing-label">Last Name</label>
            <input
              type="text"
              className="listing-input"
              required
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </section>
        <div className="flex flex-col">
          <label className="listing-label">Email</label>
          <input
            type="text"
            className="listing-input"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="listing-label">Password</label>
          <input
            type="password"
            className="listing-input"
            required
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="listing-button py-4">Signup</button>
      </form>
    </main>
  );
}
