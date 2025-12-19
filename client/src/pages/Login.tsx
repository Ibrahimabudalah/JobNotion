import { useState } from "react";
import loginImage from "../assets/images/login.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();

    const loginData = new FormData();
    loginData.append("email", email);
    loginData.append("password", password);

    try {
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <main className="flex flex-col items-center gap-14">
      <img src={loginImage} alt="Signup Image" className="h-1/3 w-2/3" />
      <form
        method="POST"
        className="flex flex-col gap-4 w-1/2"
        onSubmit={handleLoginSubmit}
      >
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
