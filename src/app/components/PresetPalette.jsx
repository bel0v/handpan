import React from 'react'
import Note from './Note.jsx'
import Dropdown from 'bootstrap/js/dropdown.js'
import * as helpers from '../redux/dbhelpers.js'


export default class PresetPalette extends React.Component {

  render(){
    const {preset, currentSounds, allSounds, chooseNote} = this.props;
    return (
      <div className='palette-body'>
        {currentSounds.map((sound, gIndex) => {
          return (
            <div key={'s'+ (gIndex+1)} className = 'palette-sound'>
              <svg className='palette-note' viewBox="0 0 88.62 88.62">
                <Note number={gIndex + 2} outerCircle={false} />
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
                  <div className='dropdown-close' />
                  {allSounds.map( (gSound, index) => {
                    let curSoundIndex = this.findCurSoundIndex(gSound.name);
                    let isAlreadySelected = ((curSoundIndex > -1) && (gSound.name !== sound.name));
                    return <div
                      className={'dropdown-menu_note-item ' + 
                        (gSound.name === sound.name ? 'active' : 
                          isAlreadySelected ? 'taken' : '')} 
                      key={'gs-'+index}
                      onMouseEnter={(event) => helpers.playSound(gSound.id)}
                      onMouseLeave={(event) => helpers.stopSound(gSound.id)}
                      onClick={(event) => {
                        chooseNote(gSound, gIndex + 1)}
                      }>
                        <span className='note-desc'>{gSound.name +' ('+ gSound.hint +')'}</span>
                        {isAlreadySelected && 
                          <span className='note-used-hint'>{curSoundIndex + 2}</span>}
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

  // searches current palette by name and returns index or -1;
  findCurSoundIndex = (name) => {
    const {currentSounds} = this.props;
    return currentSounds.map(s => s.name).indexOf(name);
  }
}

