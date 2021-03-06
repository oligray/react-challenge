import React, { useState } from 'react'
import { PropTypes } from "prop-types";
import { useSprings } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import Card from './card'
import { to, from, trans } from '../helpers/animations'

import './deck.scss'

function Deck(props) {
  const [cardsOffScreen] = useState(() => new Set());
  const [springs, set] = useSprings(props.data.length, i => ({ ...to(i), from: from(i) }));
  const [cardsList, setCardsList] = useState(props.data);
    
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
    if (!down && trigger) cardsOffScreen.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = cardsOffScreen.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      
      if(isGone) { markCard(x, index) };
      
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    
    if(!down) { resetCards() };
  });

  const markCard = (x, index) => {
      const tmpCardsList = [...cardsList];
      if (x > 0) { tmpCardsList[index].liked = true; }
      else if(x < 0) { tmpCardsList[index].liked = false; }
      setCardsList(tmpCardsList);
  }

  const resetCards = () => {
    if (cardsOffScreen.size === cardsList.length) {
      setTimeout(() => cardsOffScreen.clear() || set(i => to(i)), 600);
    } 
  }

  return springs.map(({ x, y, rot, scale }, i) => (
    // TODO: Group some of these parameters (e.g. transforms) into a parent object to simplify declaration
    <Card
      key={i}
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      data={cardsList[i]}
      bind={bind}
    />
  ));

}

Deck.propTypes = {
  data: PropTypes.array.isRequired
};

  export default Deck;