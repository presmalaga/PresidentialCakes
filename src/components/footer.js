import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="form__footer">
                <div className="footer__links">
                    <a className="footer__link" href="#"> © 2018</a>
                    <a className="footer__link" href="#">Privacy &amp; Legal</a>
                    <a className="footer__link" href="#">Contact</a>
                    <a className="footer__link" href="#">Careers</a>
                    <a className="footer__link" href="#">Locations</a>
                    <a className="footer__link" href="#">
                        <img id="cake" src="https://cdn.shopify.com/s/files/1/0642/6881/products/RosyUnicorn_2048x2048_b7d4fb2e-8f61-44a2-bd1a-3687d101ddb9_2048x@2x.jpg?v=1497476537" width={35} alt="CakeShop" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;