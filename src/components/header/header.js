import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand" >Star DB</span>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">                    
                    <li className="nav-item active">
                        <a className="nav-link" href="/">People</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Starships</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;