import React from 'react';
import './HiredProgrammers.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import DisplayHiredProgrammers from '../DisplayHiredProgrammers/DisplayHiredProgrammers';

const HiredProgrammers = (props) => {
    const {hiredProgrammers} = props;
    let getHiredProgrammers = false;

    const totalCost = hiredProgrammers.reduce( (prev, hiredProgrammer) => prev + hiredProgrammer.salary ,0 );
    const fontAwesomeUserIcon = <FontAwesomeIcon icon={faUser} />;
    const fontAwesomeDollarIcon = <FontAwesomeIcon icon={faDollarSign} />;

    if(hiredProgrammers) {
        getHiredProgrammers = true;
    }else {
        getHiredProgrammers = false;
    }

    return (
        <div>
            <div className="hiring-desc">
                <h4>{fontAwesomeUserIcon} &nbsp; Total Hired : {hiredProgrammers.length}</h4>
                <h6><span className="font-dollar">{fontAwesomeDollarIcon}</span> &nbsp; Total Cost : {totalCost}</h6>
            </div>
            
            {
                getHiredProgrammers ? hiredProgrammers.map( (programmer) => <DisplayHiredProgrammers key={programmer.id} programmer={programmer}/>
                 )
                : <p style={{textAlign:'center'}}> Hiring Not yet started </p>
            }
        </div>
    );
};

export default HiredProgrammers;