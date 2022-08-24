import React from "react";

const Tile = (props) => {
  const {tile} = props;

  return (
    <div className="tile-container">
     {Object.values(tile).map((value, index) => {
      <p className={index===0 ? 'tile-title' : 'tile'}>
        {value}
      </p>
     })}
    </div>
  );
};

export default Tile;