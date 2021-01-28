import React, {useState} from 'react'
import PropTypes from 'prop-types'




const Count = ( {count} ) => {
    const [state, setstate] = useState(count);
    
    const increase = (num) => {
        return () => {
            setstate(state + 3);
        };
        
    }

    return (
        <div>
            <button onClick={increase(2)}>incease</button>
            <p>{state}</p>
        </div>
    )
}

Count.propTypes = {
    count: PropTypes.number
}

export default Count
