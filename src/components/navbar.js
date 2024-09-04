import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <>
        <nav className="navbar">
        <ul>
            <li><Link className="link" to="/">About</Link></li>
            <li><Link className="link" to="/skills">Skills</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li>
        </ul>
        {/* <div className="form-check form-switch pe-2 my-2">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Light mode</label>
        </div> */}
        </nav>
        <div className="horizontal-white-line"></div>
        </>
    );
}