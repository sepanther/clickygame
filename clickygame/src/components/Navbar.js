import React from "react";

const Navbar = (props) => (
    <nav className="navbar">
            <span>
                {/* image in App.css */}
                <a href="/memorygame/" id="logo"> <span className="brand"></span></a>
            </span>

            <span className="">
                {props.message}
            </span>

            <span>
                Score: {props.correct} | Top Score: {props.topscore}
            </span>
    </nav>
)
export default Navbar;