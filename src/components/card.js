import React from "react";
import { string, number, array } from "prop-types";
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
        <div className="card-content">
          <h2>{role} {liked.toString()}</h2>
          <img draggable="false" src={picUrl} alt="actor pose" style={{align: 'center'}} />
          <h2>{name}</h2>
          <h5>{location}</h5>
          <h5>Hourly rate {rate}</h5>
        </div>
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  name: string,
  role: string,
  location: string,
  rate: string,
  picUrl: string
};

export default Card;
