import { FaBars } from "react-icons/fa";
import { SideBar } from "./Sidebar";
import { useState } from "react";
import { HomeStyle } from "../styles/homeStyle";

export function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <SideBar isOpen={isOpen} />
      </div>
      <div className={HomeStyle.containerAppBar}>
        <div className="">
          <FaBars
            className={HomeStyle.barAppBar}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="flex w-full justify-center p-2 gap-20">
          <a href="/" className={HomeStyle.linkAppBar}>
            Home
          </a>
          <a href="chatIA" className={HomeStyle.linkAppBar}>
            IA Chat
          </a>
        </div>
      </div>
    </div>
  );
}
