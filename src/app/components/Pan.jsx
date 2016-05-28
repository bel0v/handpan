import React from 'react';
import Note from './Note.jsx'
import * as helpers from '../redux/dbhelpers.js'

const Pan = (props) =>
    <div className='pan-container'>
      <svg className="mainPan" data-name="pan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 827.5 827.5">
        <title>
          pan
        </title>
        <circle className="cls-1" cx="413.75" cy="413.75" r="396.25"/>
        <circle className="cls-3" cx="413.75" cy="413.75" r="411.25"/>
        <path className="cls-2" d="M413.75 292.52a121.23 121.23 0 1 1-85.72 35.51 120.44 120.44 0 0 1 85.72-35.51m0-2a123.23 123.23 0 1 0 123.23 123.23 123.23 123.23 0 0 0-123.23-123.23z"/>
        <circle className="cls-2 fake" cx="500" cy="500" r="41.81" transform="rotate(-89.88 413.642 500.087)"></circle>
        <Note
          sound ={ props.sounds[0] }
          number={1}
          cx="500"
          cy="500"
          transformCircle="rotate(-89.88 413.642 500.087)"
          transformText="translate(403.54 429.22)"
          outerCircle={false}
        />
        <Note
          sound ={ props.sounds[1] }
          number={2}
          cx="607.27"
          cy="758.7"
          transformCircle="rotate(-47.01 464.945 814.716)"
          transformText="translate(512.77 686.67)"
        />
        <Note
          sound ={ props.sounds[2] }
          number={3}
          cx="393.91"
          cy="758.7"
          transformCircle="rotate(-42.99 241.31 825.124)"
          transformText="translate(299.24 686.67)"
        />
        <Note
          sound ={ props.sounds[3] }
          number={4}
          cx="758.02"
          cy="606.68"
          transformCircle="rotate(-3.28 -790.72 2070.324)"
          transformText="translate(660.73 533.82)"
        />
        <Note
          sound ={ props.sounds[4] }
          number={5}
          cx="242.76"
          cy="606.68"
          transformCircle="rotate(-86.72 153.95 609.22)"
          transformText="translate(146.37 533.82)"
        />
        <Note
          sound ={ props.sounds[5] }
          number={6}
          cx="758.02"
          cy="392.33"
          transformCircle="rotate(-86.72 669.196 394.884)"
          transformText="translate(660.73 321.44)"
        />
        <Note
          sound ={ props.sounds[6] }
          number={7}
          cx="242.76"
          cy="392.33"
          transformCircle="rotate(-3.28 -1306.464 1855.786)"
          transformText="translate(148.48 321.44)"
        />
        <Note
          sound ={ props.sounds[7] }
          number={8}
          cx="606.87"
          cy="240.31"
          transformCircle="rotate(-42.99 454.272 306.692)"
          transformText="translate(509.75 169.34)"
        />
        <Note
          sound ={ props.sounds[8] }
          number={9}
          cx="393.51"
          cy="240.31"
          transformCircle="rotate(-47.01 251.2 296.34)"
          transformText="translate(298.49 169.34)"
        />
      </svg>
    </div>

export default Pan;