import React from 'react';
import './FooterText.scss'

const FooterText = ({text, style}) => {
    return (
            <p className='footer-text__style'>{text}</p>
    );
};

export default FooterText;