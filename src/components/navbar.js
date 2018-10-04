import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (

            <div className="navbar">
                <div id="header">
                    <header className="head">
                        <h1 className="font">Presidential Cakes</h1>
                        <p>Bake America Great Again</p>
                    </header>
                </div>
                <ul>
                    <li>
                        <a className="active" href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#">FORM</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;