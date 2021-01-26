import React, {useState} from 'react'
import PropTypes from 'prop-types'




const Count = ( {count} ) => {
    const [state, setstate] = useState(count);

    const increase = () => {
        console.log(state);
        setstate(state + 1);
    }

    return (
        <div>
            <button onClick={ () => increase()}>incease</button>
            <p>{state}</p>
        </div>
    )
}

Count.propTypes = {
    count: PropTypes.number
}

export default Count
