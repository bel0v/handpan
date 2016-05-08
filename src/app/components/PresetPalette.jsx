import React from 'react'
import Note from './Note.jsx'
import Dropdown from 'bootstrap/js/dropdown.js'


const PresetPalette = (props) => {
  const {preset, db} = props;
  return (
    <div className='palette-header'>
      <div className='palette-header-left'>
        <span className='note-icon'/>
        Пре-set
      </div>
      <div className='palette-header-middle'>
        <span className='arrow-icon left'/>
        <div className="preset-dropdown-wrapper">
          <button id="presetDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {preset.name}
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="presetDropdown">
            {db.presets.map(function(preset) {
              return <li 
                data-id={preset.id}
                onClick={(event) => props.choosePresetOption(preset.id)}>
                  {preset.name}
                </li>;
            })}
          </ul>
        </div>
        <span className='arrow-icon right'/>
      </div>
      <div className='palette-header-right'>
        <svg className='palette-note' viewBox="0 0 88.62 88.62">
          <Note number={+preset.id.substring(1)} outerCircle={false} />
        </svg>
        <span className='palette-ding'>{preset.ding}</span>
        <span className='palette-hint'>{"("+ preset.hint +")"}</span>
      </div>
    </div>
  )
}

PresetPalette.propTypes = {
}
PresetPalette.defaultProps = {
}


export default PresetPalette;