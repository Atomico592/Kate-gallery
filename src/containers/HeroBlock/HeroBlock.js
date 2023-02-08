import React from 'react';
import "./HeroBlock.scss"
import Header from "../Header/Header";

const HeroBlock = () => {
    return (
        <div className="hero-block">
            <div className="container">
            <Header/>
            </div>
            <div className="hero-block__titles">
                <h1 className="hero-block__titles-main-title">Create art with me</h1>
                <h3 className="hero-block__titles-subtitle">Passionate creative studio helping startups grow their business!</h3>
            </div>
        </div>
    );
};

export default HeroBlock;