"use client"

import Image from "next/image";
import React from "react";
import Hamburger from "./Hamburger";
import { AiFillGithub } from "react-icons/ai"
import { atom, useAtom } from "jotai";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs"

const theme = atom('light');
export const themeAtom = atom(get => get(theme));

function Header() {
  const [appTheme, setTheme] = useAtom(theme);
  const handleClick = () => {
    setTheme(appTheme === 'light'? 'dark': 'light');
  }
  return (
    <div className={`${appTheme} header-cont shadow-${appTheme}`}>
      <Hamburger />

      <div className="header-mid">
        <a href='/'>
          <button className={`header-btn ${appTheme}-btn`}>
            Home
          </button>
        </a>
        <a href='/playground'>
          <button className={`header-btn ${appTheme}-btn`}>
            Playground
          </button>
        </a>
      </div>

      <div className="link-cont">
        {appTheme === 'light'? <BsFillMoonStarsFill className="theme-switcher" onClick={handleClick} />: <BsSun className="theme-switcher" onClick={handleClick} />}
        <a href="https://github.com/jotai-labs/jotai-tutorial">
          <AiFillGithub className={`${appTheme}-icon`} />
        </a>
      </div>
    </div>
  );
}

export default Header;