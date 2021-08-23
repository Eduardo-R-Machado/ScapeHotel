import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header>
            <div className="logo"><p>Scape</p>
                                   <p className="subnome">Hotel</p>     
            </div>

            <nav className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><button className="btn-contato" href="#">Contato</button></li>
            </nav>
        </header>
    )
}

export default Header;