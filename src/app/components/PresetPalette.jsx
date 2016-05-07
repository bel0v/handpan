import React from 'react'

const PresetPalette = (props) => {
  let inner = (
      <g className={"group-"+ props.number +"-inner"}>
        <circle className="cls-4" cx={props.cx} cy={props.cy} r="41.81" transform={props.transformCircle}/>
        <text className="cls-5" transform={props.transformText}>{props.number}</text>
      </g>    
    );
  
  if (props.outerCircle) {
    return (
      <g className={"group-" + props.number}>
        <circle className="cls-1" cx={props.cx} cy={props.cy} r="70.08" transform={props.transformCircle}/>
        {inner}
      </g>
    );
  }
  else {
    return inner;
  }
}

PresetPalette.propTypes = {
  number:          React.PropTypes.number.isRequired,
  cx:              React.PropTypes.string.isRequired,
  cy:              React.PropTypes.string.isRequired,
  transformCircle: React.PropTypes.string.isRequired,
  transformText:   React.PropTypes.string.isRequired,
  outerCircle:     React.PropTypes.bool
}
PresetPalette.defaultProps = {
  outerCircle: true
}

export default PresetPalette;