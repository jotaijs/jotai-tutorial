import React from 'react'
import './hamburger.css'

import { themeAtom } from "./Header";
import { useAtom } from 'jotai';

function Hamburger() {
    const [theme] = useAtom(themeAtom)
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className={`menu__box ${theme}-menu`}>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/intro">Introduction</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/theme-setting">Theme Setup</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/persisting-state">Persisting State</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/readonly-atoms">Read Only Atoms</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/write-only-atoms">Write Only Atoms</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/read-write-atoms">Read Write Atoms</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/atom-creaters">Atom Creaters</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/async-read-atoms">Async Read Atoms</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/async-write-atoms">Async Write Atoms</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/official-utils">Official Utils</a></li>
                <li><a className={`menu__item ${theme}-item`} href="/quick-start/immer-integration">Integrations</a></li>
            </ul>
        </div>
    )
}

export default Hamburger