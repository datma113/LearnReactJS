import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import  '../App.css'

const Product = ( {name, age} ) => {
    const isActive = (number) => {
        console.log(`---${number}---`);
        return number === 3;
    }
    const test = (text = '?') => {
        return `huhu ${name} haha: ${text}`;
    };

    return (
        <div>
            <p className={ classNames( {Active: isActive(age)} ) }>  name is: {name}</p>
            <p>age: {age}</p>
            <p style={ {color: 'red'} } >{test()}</p>
          
        </div>
    )
}

Product.prototype = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default Product
