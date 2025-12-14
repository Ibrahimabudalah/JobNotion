import headerLogo from "../assets/logos/header.svg";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const [open, setIsOpen] = useState(false);

  const toggleState = () => {
    setIsOpen(!open);
  };

  return (
    <header>
      <div className="flex justify-between items-center">
        <img src={headerLogo} alt="JobNotion" />
        <div className="z-50" onClick={toggleState}>
          <Hamburger color="white" />
        </div>
      </div>

      <div
        className={`h-screen w-1/2 bg-gradient-to-b from-[#4a2f8c] via-[#3a1f6f] to-[#2a0e61]
                    border-l border-[#6d55b3]
                    absolute top-0 right-0 ${open ? "block" : "hidden"}`}
      >
        <div className="h-1/2 relative flex justify-evenly items-center flex-col top-56 text-[#F8FAFC]">
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
        </div>
      </div>
    </header>
  );
}
