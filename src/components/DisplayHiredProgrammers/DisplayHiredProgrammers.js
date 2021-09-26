import React from 'react';
import './DisplayHiredProgrammers.css';
const DisplayHiredProgrammers = (props) => {
    const {programmer} = props;
    
    return (
        <div className="hired">
            <img className="card-img-top img-style" src={`/img/contestants/${programmer.id}.png`} alt="missing"/>
            <p>{programmer.name}</p>
        </div>
    );
};

export default DisplayHiredProgrammers;