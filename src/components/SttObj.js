import "./SttObj.css";
import React, { useState } from "react";
import classNames from "classnames";

const SttObj = () => {
  const arrObj = [
    { name: "Java", id: 1, isActive: false },
    { name: "JavaScript", id: 2, isActive: false },
    { name: "Python", id: 3, isActive: true },
  ];

  const [arrObjState, setArrObjState] = useState(arrObj);

  const removeIt = (x,index) => {
    return () => {
      const currentStatus = arrObjState[index].isActive;
    console.log(x);

      setArrObjState([
        ...arrObjState.slice(0, index),
        { ...arrObjState[index], isActive: !currentStatus },
        ...arrObjState.slice(index + 1),
      ]);
    };
  };

  const renderA = arrObjState.map((x, index) => {
    return (
      <p
        className={classNames({ isActive: x.isActive }, "curs")}
        onClick={removeIt(x,index)}
        key={index}
      >
        {x.id}: {x.name}
      </p>
    );
  });
  return <div>{renderA}</div>;
};

export default SttObj;
