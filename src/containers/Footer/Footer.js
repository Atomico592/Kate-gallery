import React from 'react';
import "./Footer.scss"
import FooterText from "./FooterText/FooterText";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__main-block">
                <div>
                    <p>
                        <FooterText text={"3rd Floor, Santa Monica Beach, CA, San Francisco"}/>
                    </p>
                    <p>
                        <FooterText text={"(359) 0 123 456 789 - info@yourmail.com"}/>
                    </p>
                </div>
            </div>
            <div className="footer__under-block">
                <p style={{paddingTop: "21px"}}>
                <FooterText text={"Copyright 2023 - All Rights Reserved - Designed by JD"}/>
                </p>
            </div>
        </div>
    );
};

export default Footer;