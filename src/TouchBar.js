import _ from 'lodash';
import React from 'react';
import './css/TouchBar.css';

export default function TouchBar(props) {
  const items = _.rangeRight(12).map(num =>
    <TouchBarItem key={num} barSelect={props.barSelect} barNumber={num} />);
  return (<ul id="touchBarUL" className='hideUL'>{items} </ul>);
}

function TouchBarItem(props) {

  const eventMouseEntered = new CustomEvent('MouseEntered', {
    bubbles: true,
    detail: { id: () => props.barNumber }
  });

  const eventMouseLeft = new CustomEvent('MouseLeft', {
    bubbles: true,
    detail: { id: () => props.barNumber }
  });


  let color = '#ffe699';
  if (props.barSelect[props.barNumber]) {
    color = 'red';
  }

  if (props.barNumber === 0) {
    return <li onMouseEnter={(e) => e.target.dispatchEvent(eventMouseEntered) } onMouseLeave={(e) => e.target.dispatchEvent(eventMouseLeft)} id={props.barNumber} className='firstBarItem' style={{backgroundColor: color}}></li>;
  } else {
    return <li onMouseEnter={(e) => e.target.dispatchEvent(eventMouseEntered) } onMouseLeave={(e) => e.target.dispatchEvent(eventMouseLeft)} id={props.barNumber} style={{backgroundColor: color}}></li>;
  }
}
