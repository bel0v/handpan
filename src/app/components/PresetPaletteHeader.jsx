import React from 'react'
import Note from './Note.jsx'
import Dropdown from 'bootstrap/js/dropdown.js'


const PresetPaletteHeader = (props) => {
  const {preset, presetsList} = props;
  return (
    <div className='palette-header'>
      <div className='palette-header-left'>
        <span className='note-icon'/>
        <span>Пре-set</span>
      </div>
      <div className='palette-header-middle'>
        <span className='arrow-icon arrow-dd-left' onClick={props.onClickLeft}/>
        <div className="preset-dropdown-wrapper">
          <button id="presetDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>{preset.name}</span>
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="presetDropdown">
            {presetsList.map(function(preset) {
              return <li
                key={preset.id}
                onClick={(event) => props.choosePresetOption(preset.id)}>
                  {preset.name}
                </li>;
            })}
          </ul>
        </div>
        <span className='arrow-icon arrow-dd-right' onClick={props.onClickRight}/>
      </div>
      <div className='palette-header-right'>
        <svg className='palette-note' viewBox="0 0 88.62 88.62">
          <Note number={1} outerCircle={false} />
        </svg>
        <span className='palette-ding'>{preset.ding}</span>
        <span className='palette-hint'>{"("+ preset.hint +")"}</span>
      </div>
    </div>
  )
}

PresetPaletteHeader.propTypes = {
}
PresetPaletteHeader.defaultProps = {
}


export default PresetPaletteHeader;