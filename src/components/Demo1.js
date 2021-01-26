import React from 'react'
import PropTypes from 'prop-types'

const Demo1 = ( {firstEvent, firstDataProps} ) => {
    
    return (
        <div>
            <p> hello ReactJS </p>
            <p>this is component Demo1</p>
            <p>this is props down: {firstDataProps} </p>
            <button onClick={firstEvent}>click</button>
        </div>
    )
}

Demo1.propTypes = {
    firstEvent: PropTypes.func,
    firstDataProps: PropTypes.string
}

export default Demo1


