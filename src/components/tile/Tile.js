import React from "react";

const Tile = (props) => {
  const {contact} = props;

  return (
    <div className="tile-container">
     {Object.values(contact).map((value, index) => {
      <p className={index===0 ? 'tile-title' : 'tile'}>
        {value}
      </p>
     })}
    </div>
  );
};

export default Tile;