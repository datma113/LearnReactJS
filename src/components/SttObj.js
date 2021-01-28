import React, { useState } from 'react'


const SttObj = () => {
    const arrObj = [
        {name: 'obj 1', id: 1},
        {name: 'obj 2', id: 2},  
        {name: 'obj 3', id: 3},
    ]
    const [objState, setstate] = useState(arrObj);

    
    const change = () => {
        return () => {
           
        }
       

    }

    return (
        <div>
           <button onClick={change()}>change obj</button>
           <div>
               <p></p>
           </div>
        </div>
    )
}

export default SttObj
