import React from 'react'
import * as helpers from '../redux/dbhelpers.js'

const Note = (props) => {
  let inner = (
      <g className={"group-"+ props.number +"-inner"} 
        onMouseEnter={!props.outerCircle && props.sound ? event => helpers.playSound(props.sound) : ''}
        onTouchStart={!props.outerCircle && props.sound ? event => helpers.playSound(props.sound) : ''}>
        <circle className="cls-4" cx={props.cx} cy={props.cy} r="41.81" transform={props.transformCircle}/>
        <text className="cls-5" transform={props.transformText}>{props.number}</text>
      </g>    
    );
  
  if (props.outerCircle) {
    return (
      <g className={"group-" + props.number}
        onMouseEnter={props.sound ? event => helpers.playSound(props.sound): ''}
        onTouchStart={props.sound ? event => helpers.playSound(props.sound): ''}>
        <circle className="cls-1" cx={props.cx} cy={props.cy} r="70.08" transform={props.transformCircle}/>
        {inner}
      </g>
    );
  }
  else {
    return inner;
  }
}


Note.propTypes = {
  number:          React.PropTypes.number.isRequired,
  cx:              React.PropTypes.string,
  cy:              React.PropTypes.string,
  transformCircle: React.PropTypes.string,
  transformText:   React.PropTypes.string,
  sound:           React.PropTypes.string,
  outerCircle:     React.PropTypes.bool
}

Note.defaultProps = {
  outerCircle: true,
  cx:              "500",
  cy:              "500",
  transformCircle: "rotate(-89.88 43.81 500.48)",
  transformText:   "translate(34.1 59.78)"
}

export default Note;