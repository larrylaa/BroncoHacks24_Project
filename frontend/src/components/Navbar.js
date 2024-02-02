    import "../styles/Navbar.css";
    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import { FaBars, FaTimes } from "react-icons/fa";

    const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className="header">
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <div className="hamburger-open">
                <FaTimes size={30} style={{ color: "black" }} />
                <Link className="link" to="/" onClick={closeMenu}>
                Home
                </Link>
                <Link className="link" to="/ranking" onClick={closeMenu}>
                Ranking
                </Link>
                
            </div>
            ) : (
            <FaBars size={30} style={{ color: "black" }} />
            )}
        </div>
        </div>
    );
    };

    export default Navbar;
