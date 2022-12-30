import Image from "next/image";
import React from "react";
import github_icon from "../../public/github.png";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <div className="header-cont">
      <Hamburger />

      <div className="link-cont">
        <a className="home-link" href="/"><p>Jōtai</p></a>
        <Image src={github_icon} alt="bhoot" width={40} height={40} />
      </div>
    </div>
  );
}

export default Header;