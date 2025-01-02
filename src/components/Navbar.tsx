import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Reference to the slide menu and button for detecting outside clicks
    const slideMenuRef = useRef<HTMLDivElement | null>(null); // For the slide menu
    const menuButtonRef = useRef<HTMLButtonElement | null>(null); // For the menu button

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close the menu if the user clicks outside the menu or menu button
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                slideMenuRef.current && !slideMenuRef.current.contains(event.target as Node) &&
                menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)
            ) {
                closeMenu(); // Close the menu if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Cleanup on component unmount
        };
    }, []);
  return (
    <nav>
        <div className="navbar-logo">
            <Link to="/">
                <h2>Gaurav</h2>
            </Link>
        </div>
        <div className="navbar-items">
        <ThemeToggle />
        <div className="navbar-links">
            <Link className="navbar-link" to="/projects">
            Projects
            </Link>
            <Link className="navbar-link" to="/blog">
            Blog
            </Link>
            <Link className="navbar-link" to="/about">
            About
            </Link>
            <Link className="navbar-link" to="/contact">
            Contact
            </Link>
        </div>
            <button className="menu-toggle" onClick={toggleMenu} style={{
            width: '1.6rem',
            cursor: 'pointer',
            color: 'inherit',
            background: 'none',
            border: 'none',
            marginRight: '0.5rem',
        }} aria-label="Toggle Menu"
        ref={menuButtonRef}>
            <Bars3Icon />
        </button>
        </div>

      <div className={`slide-menu ${menuOpen ? "open" : ""}`}ref={slideMenuRef}>
      <button className="menu-toggle" onClick={toggleMenu} style={{
        width: '1.6rem',
        cursor: 'pointer',
        color: 'inherit',
        background: 'none',
        border: 'none',
        marginRight: '0.5rem',
      }} aria-label="Toggle Menu">
        <XMarkIcon />
      </button>
      <Link className="navbar-link" to="/projects">
            Projects
            </Link>
            <Link className="navbar-link" to="/blog">
            Blog
            </Link>
            <Link className="navbar-link" to="/about">
            About
            </Link>
            <Link className="navbar-link" to="/contact">
            Contact
            </Link>
      </div>
    </nav>
  )
}

export default Navbar