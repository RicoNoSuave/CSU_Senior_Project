import React from "react";
import logo from '../PrometheusLogo.png';

var URL = "https://github.com/RHarris87345/CSU-Senior-Project/blob/master/docs/Prometheus%20Full%20Documentation.md";

const Nav = () => {
    return (
        <nav className='navbar'>
            <img className='logo' alt = "logo" src = { logo } width="30px"/>
            <form>
                <ul>
                    <li><h2>Prometheus</h2></li>
                    <li><h3><a href="/">Home</a></h3></li>
                    <li><h3><a href="/download">Download</a></h3></li>
                    <li><h3><a href={ URL } target="_blank" rel="noopener noreferrer">Documentation</a></h3></li>
                </ul>
            </form>
            <div className='contact'>
                <ul>
                    <li><h3><a href="mailto:ricardo.e.harris@gmail.com">Contact Us</a></h3></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;