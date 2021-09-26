import React from 'react';
import './Programmer.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHiking } from '@fortawesome/free-solid-svg-icons';

const Programmer = (props) => {

    const {id, name, codeforcesRating, age, country, salary} = props.programmer;
    const imageURL =  `/img/contestants/${id}.png`;

    const fontAwesomeIcon = <FontAwesomeIcon icon={faHiking} />;
    
    return (
        <div className="programmer">
            <div className="card card-style">
                <img className="card-img-top image-style" src={imageURL} alt="missing"/>

                <div className="card-body">
                    <h5 className="card-title "><strong className="text-style">Name:</strong> <span>{name}</span></h5>
                    <p className="card-text card-text-style"><strong className="text-style">Codeforces Rating:</strong> <span className="value-style" >{codeforcesRating}</span></p>
                    <p className="card-text card-text-style"><strong className="text-style">Age:</strong> <span className="value-style">{age}</span></p>
                    <p className="card-text card-text-style"><strong className="text-style">Country:</strong> <span className="value-style">{country}</span></p>
                    <p className="card-text card-text-style"><strong className="text-style">Salary:</strong> <span className="value-style">{salary}</span></p>
                    <div className="card-bottom">
                        <button className="btn-regular" onClick={()=>props.handleHiringProgrammers(props.programmer)}> 
                            <strong>{fontAwesomeIcon} &nbsp; Hire Me</strong>
                        </button>
                        <p><i className="fab fa-hackerrank"></i></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programmer;