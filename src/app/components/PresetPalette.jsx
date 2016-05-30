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
              <div className="note-dropdown-wrapper">
                <div
                  className={'note-dropdown-btn ' + (sound.isDuplicate ? 'duplicate' : '')}
                  id={"noteDropdown-"+ gIndex+1}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={e => this.placePalette(e.currentTarget)}
                >
                  <span className='dd-button-text'>
                    {sound.name +' ('+ sound.hint +')'}
                    <div className ='duplicate-hint'>Ноты не могут повторяться!</div>
                  </span>
                  <span className="caret"></span>
                <div className={"dropdown-menu note-dropdown" + (gIndex + 1 < 5 ? ' upper' : '')} aria-labelledby={"noteDropdown-"+ gIndex+1}>
                  <div className='dropdown-close' />
                  {allSounds.map( (gSound, index) => {
                    let curSoundIndex = this.findCurSoundIndex(gSound.name);
                    let isActive = (gSound.name === sound.name);
                    let isAlreadySelected = ((curSoundIndex.length) && !isActive);
                    let isActiveDuplicate = (sound.isDuplicate && isActive);

                    return <div
                      className={'dropdown-menu_note-item ' +
                        (gSound.name === sound.name ? 'active' :
                          isAlreadySelected ? 'taken' : '') +
                        (isActiveDuplicate ? ' duplicate' : '')}
                      key={'gs-'+index}
                      onMouseEnter={(event) => helpers.playSound(gSound.id)}
                      onMouseLeave={(event) => helpers.stopSound(gSound.id)}
                      onClick={(event) => {
                        chooseNote(gSound, gIndex + 1)}
                      }>
                        <span className='note-desc'>{gSound.name}<span className='sound-hint'>{' ('+ gSound.hint + ')'}</span>
                          {(isAlreadySelected || isActiveDuplicate ) &&
                            <span className='note-used-hint'>{curSoundIndex}</span>}
                        </span>
                      </div>;
                  })}
                </div>
                </div>
              </div>
              <svg className='palette-note' viewBox="0 0 88.62 88.62">
                <Note number={gIndex + 2} outerCircle={false} />
              </svg>
            </div>
          )
        })}
      </div>
    )

  }
  placePalette =(ddButton) => {
    let ddMenu = ddButton.children[2];
    ddMenu.style.top = (ddButton.offsetTop + 50 + 'px');
  }
  // searches current palette by name and returns index(es) or '';
  findCurSoundIndex = (name) => {
    const {currentSounds} = this.props;
    const curSoundNames = currentSounds.map(s => s.name);
    let indexes = curSoundNames.reduce((a,e,i) => {
        if(e === name) a.push(i);
        return a;
      }, []);
    return indexes.map(i => i + 2).join(', ');
  }
}

