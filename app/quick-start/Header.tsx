"use client"

import Image from "next/image";
import React from "react";
import github_icon from "../../public/github.png";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <div className="header-cont">
      <Hamburger />

      <div className="header-mid">
        <a href='/'>
          <button className='header-btn'>
            Home
          </button>
        </a>
        <a href='/playground'>
          <button className='header-btn'>
            Playground
          </button>
        </a>
      </div>

      <div className="link-cont">
        <a href="https://github.com/jotai-labs/jotai-tutorial">
          <Image src={github_icon} alt="bhoot" width={40} height={40} />
        </a>
      </div>
    </div>
  );
}

export default Header;