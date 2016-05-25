import React from 'react'
import Note from './Note.jsx'
import Dropdown from 'bootstrap/js/dropdown.js'
import * as helpers from '../redux/dbhelpers.js'


export default class PresetPalette extends React.Component {

  render(){
    const {preset, currentSounds, allSounds} = this.props;
    return (
      <div className='palette-body'>
        {currentSounds.map(function(sound, gIndex) {
          return (
            <div key={'s'+ (gIndex+1)} className = 'palette-sound'>
              <svg className='palette-note' viewBox="0 0 88.62 88.62">
                <Note number={gIndex + 2} outerCircle={false} />
              </svg>
              <div className="note-dropdown-wrapper">
                <button 
                  className={'note-dropdown ' + (sound.isDuplicate ? 'duplicate' : '')} 
                  id={"noteDropdown-"+ gIndex+1} 
                  ref={"dd_"+ gIndex+1} 
                  type="button" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false"
                >
                  {sound.name +' ('+ sound.hint +')'}
                  <span className="caret"></span>
                </button>
                <div className={"dropdown-menu note-dropdown" + (gIndex + 1 < 5 ? ' upper' : '')} aria-labelledby={"noteDropdown-"+ gIndex+1}>
                  <div 
                    className='dropdown-close' 
                    onClick ={event => this.refs[`dd_${gIndex+1}`].toggle()}/>
                  {allSounds.map(function(gSound, index) {
                    return <div
                      className={'dropdown-menu_note-item ' + (gSound.name === sound.name ? 'active' : '')} 
                      key={'gs-'+index}
                      onMouseEnter={(event) => helpers.playSound(gSound.id)}
                      onMouseLeave={(event) => helpers.stopSound(gSound.id)}
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
 
}

