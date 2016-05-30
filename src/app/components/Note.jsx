import React from 'react'
import * as helpers from '../redux/dbhelpers.js'
.className.replace(/\bMyClass\b/,'');
const Note = ({number, outerCircle, sound, cx, cy, transformText,transformCircle}) => {
  let inner = (
      <g className={"group-"+ number +"-inner"}
        onMouseEnter={!outerCircle && sound ? e => {
          e.preventDefault(); 
          helpers.playSound(sound, true)} : ''}
        onTouchStart={!outerCircle && sound ? e => {
          e.preventDefault(); 
          e.currentTarget.className += ' touched'
          helpers.playSound(sound, true)} : ''}
        onTouchEnd={sound ? e => {
          helpers.stopSound(sound);
          e.currentTarget.className.replace(/\btouched\b/,'');
          } : ''}
        onMouseLeave={sound ? event => helpers.stopSound(sound) : ''}>
        <circle className="cls-4" cx={cx} cy={cy} r="41.81" transform={transformCircle}/>
        <text className="cls-5" transform={transformText}>{number}</text>
      </g>
    );

  if (outerCircle) {
    return (
      <g className={"group-" + number}
        onMouseEnter={sound ? e => {
          e.preventDefault(); 
          helpers.playSound(sound, true)}: ''}
        onTouchStart={sound ? e => {
          e.preventDefault(); 
          e.currentTarget.className += ' touched'
          helpers.playSound(sound, true)}: ''}
        onTouchEnd={sound ? e => {
          helpers.stopSound(sound);
          e.currentTarget.className.replace(/\btouched\b/,'');
          } : ''}
        onMouseLeave={sound ? event => helpers.stopSound(sound) : ''}>
        <circle className="cls-1" cx={cx} cy={cy} r="70.08" transform={transformCircle}/>
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