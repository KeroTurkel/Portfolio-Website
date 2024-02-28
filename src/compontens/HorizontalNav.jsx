import React from "react";
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import "../compontens/Navigation.css"

const HorizontalNav = () =>{
    return(

        <div className="navigation">
            <nav className="stroke">
            <div className="nav-stroke">
            <ul>
                <li>
                    <Link to='home' smooth={true} duration={1000}>Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={1250}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={1500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='project' smooth={true} duration={1750}>
                        Project
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default HorizontalNav;