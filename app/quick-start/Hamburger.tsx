import React from 'react'
import './hamburger.css'

function Hamburger() {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li><a className="menu__item" href="/quick-start/intro">Introduction</a></li>
                <li><a className="menu__item" href="/quick-start/theme-setting">Theme Setup</a></li>
                <li><a className="menu__item" href="/quick-start/persisiing-state">Persisting State</a></li>
                <li><a className="menu__item" href="/quick-start/readonly-atoms">Readonly Atoms</a></li>
                <li><a className="menu__item" href="/quick-start/read-write-atoms">ReadWrite Atoms</a></li>
                <li><a className="menu__item" href="/quick-start/async-read-atoms">Async Read Atoms</a></li>
            </ul>
        </div>
    )
}

export default Hamburger