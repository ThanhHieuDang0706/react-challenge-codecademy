import React from "react";

import Tile from '../tile/Tile';

const TileList = (props) => {
  const {contacts} = props;


  return (
    <div>
      {contacts.map((contact, index) => {
        return (
         <Tile contact={contact} key={index} />
        )
      })
      }
    </div>
  );
};

export default TileList;