import { useState } from "react";
import signupImage from "../assets/images/signup.svg";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex flex-col items-center justify-evenly">
      <img src={signupImage} alt="Signup Image" className="h-2/3 w-2/3" />
      <form method="POST" className="flex flex-col gap-4">
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
