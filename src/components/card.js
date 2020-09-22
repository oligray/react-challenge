import React from "react";
import { PropTypes } from "prop-types";
import { animated, interpolate } from "react-spring";
import './card.scss'

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, role, location, rate, picUrl, liked } = data;

  return (
    <animated.div
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        className="card"
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <div aria-label="profile" className="card-content">
          <h2>
            {role}  
            {liked ? 
              <span role="img" aria-label="liked"> 😀</span> : 
              <span role="img" aria-label="disliked"> 🙁</span>
            } 
          </h2>
          <img aria-label="headshot" draggable="false" src={picUrl} alt="actor pose" style={{align: 'center'}} />
          <h2 aria-label="name">{name}</h2>
          <h4 aria-label="location">{location}</h4>
          <h5 aria-label="rate">Hourly rate {rate}</h5>
        </div>
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
};

export default Card;
