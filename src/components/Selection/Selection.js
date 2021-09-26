import React, {useEffect, useState} from 'react';
import './Selection.css';
import Programmer from '../Programmer/Programmer';
import HiredProgrammers from '../HiredProgrammers/HiredProgrammers';
const Selection = (props) => {

    const [programmers, setProgrammers] = useState([]);
    const [hiredProgrammers, setHiredProgrammers] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              setProgrammers(data);
            });
    },[])

    const handleHiringProgrammers = (programmer) => {
        const {salary} = programmer;
        props.handleRemainingBudget(salary);

        const newHiredProgrammers = [...hiredProgrammers, programmer];
        setHiredProgrammers(newHiredProgrammers);
    }

    return (
        <div className="selection">
            <div className="programmers-style">
                { 
                    programmers.map( (programmer) => <Programmer key={programmer.id} 
                                                                 programmer={programmer}
                                                                 handleHiringProgrammers={handleHiringProgrammers} /> )
                }
            </div>

            <div className="selected-programmer">
                <h4 className="select-title">Selected Programmers</h4>
                <HiredProgrammers hiredProgrammers={hiredProgrammers}/>
            </div>
        </div>
    );
};

export default Selection;