import React from 'react';
import './Header.css';

const Header = (props) => {

    const {budget, remainingBudget} = props;
    
    return (
        <div className="header">
            <h1 className="top-header">Google Code Jam</h1>
            <p className="description">Hire World's Top Competitive Programmers</p>
            <p className="budget">
                Budget: <span style={{color:'rgb(116, 8, 30)'}}>${budget}</span> M 
                &nbsp; <span style={{color:'greenyellow'}}>||</span> &nbsp; Remains: <span style={{color:'rgb(116, 8, 30)'}}>${remainingBudget}</span> M
            </p>
        </div>
    );
};

export default Header;          