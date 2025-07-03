import React from 'react';
import './Card.css'; // Assuming you have a Card.css file for styling
const Card= ({ name, email , id}) => {
   // const { name, email , id}= props;
    return (
       
<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
        <h1>RoboFriend {id} </h1>
             <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
     <div>
         <h2>{name}</h2>
         <p>{email}</p>
    </div>
         
</div> 

    );

}
export default Card;