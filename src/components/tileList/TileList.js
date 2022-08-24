import React from "react";

import Tile from '../tile/Tile';

const TileList = (props) => {
  const {tiles} = props;


  return (
    <div>
      {tiles.map((tile, index) => {
        return (
         <Tile tile={tile} key={index} />
        )
      })
      }
    </div>
  );
};

export default TileList;