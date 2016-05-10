import React from 'react'
import Note from './Note.jsx'
import Dropdown from 'bootstrap/js/dropdown.js'


const PresetPalette = (props) => {
  const {preset, currentSounds, allSounds} = props;
  return (
    <div className='palette-body'>
      {currentSounds.map(function(sound, gIndex) {
        return (
          <div key={'s'+ (gIndex+1)} className = 'palette-sound'>
            <svg className='palette-note' viewBox="0 0 88.62 88.62">
              <Note number={gIndex + 1} outerCircle={false} />
            </svg>
            <div className="note-dropdown-wrapper">
              <button 
                className={'note-dropdown ' + (sound.isDuplicate ? 'duplicate' : '')} 
                id={"noteDropdown-"+ gIndex+1} 
                type="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                {sound.name +' ('+ sound.hint +')'}
                <span className="caret"></span>
              </button>
              <div className={"dropdown-menu note-dropdown" + (gIndex + 1 < 5 ? ' upper' : '')} aria-labelledby={"noteDropdown-"+ gIndex+1}>
                {allSounds.map(function(gSound, index) {
                  return <div
                    className='dropdown-menu_note-item' 
                    key={'gs-'+index}
                    onClick={(event) => {
                      props.chooseNote(gSound, gIndex + 1)}
                    }>
                      {gSound.name +' ('+ gSound.hint +')'}
                    </div>;
                })}
              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

PresetPalette.propTypes = {
}
PresetPalette.defaultProps = {
}


export default PresetPalette;

