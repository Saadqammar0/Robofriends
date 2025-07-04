import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  /*if(true){
    throw new Error('I am a bad error');
  }*/
  return (
    <div>
      {
        robots.map((user, i) => (
          <Card
            key={i}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        ))
      }
    </div>
  );
};

export default Cardlist;
