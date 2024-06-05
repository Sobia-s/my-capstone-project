import img from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './nav.css';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="nav-container">
                <div className="logo-menu-container">
                    <Link to="/" onClick={closeMenu}>
                        <img src={img} alt="logo of little lemon" width={200} height={50} className="logo-container" />
                    </Link>
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776; {/* Unicode character for hamburger icon */}
                    </div>
                </div>
                <ul className={`link-container ${isMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
                    <li><Link to="/reservations" onClick={closeMenu}>Reservations</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;





