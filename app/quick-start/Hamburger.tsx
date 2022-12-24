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
                <li><a className="menu__item" href="#">Intro</a></li>
                <li><a className="menu__item" href="#">Theme Setup</a></li>
                <li><a className="menu__item" href="#">Persisting State</a></li>
                <li><a className="menu__item" href="#">Readonly Atoms</a></li>
                <li><a className="menu__item" href="#">ReadWrite Atoms</a></li>
            </ul>
        </div>
    )
}

export default Hamburger