import React from 'react'
import PresetPalette from '../components/PresetPalette.jsx'
import PresetPaletteHeader from '../components/PresetPaletteHeader.jsx'
import { connect } from 'react-redux'
import * as helpers from '../redux/dbhelpers.js'
import {chooseCurrentPreset} from '../redux/actions.js'

@connect(
  state => ({
    currentPreset: state.currentPreset,
    db: state.db
  })
)
export default class PresetContainer extends React.Component {
  render() {
    const {currentPreset, db, dispatch} = this.props;
    let soundObj = helpers.getSoundByName(db, currentPreset.sounds[0]);
    let preset = {
      id: currentPreset.id,
      name: currentPreset.name,
      hint: soundObj.hint,
      ding: soundObj.name}

    return (
      <div className='preset-palette'>
      <PresetPaletteHeader 
        preset={preset} 
        presetsList={db.presets} 
        choosePresetOption={this.choosePresetOption}/>
      <PresetPalette 
        preset={preset} 
        currentSounds={this.getCurrentSounds(currentPreset.id)}
        allSounds={db.sounds}
        chooseNote={this.chooseNote}
      />
      </div>
    )
  }

  getCurrentSounds = (currentPresetId) =>{
    let {db} = this.props;
    let currentSounds = helpers.getPresetById(db, currentPresetId).sounds.slice();
    currentSounds.shift(); // remove the first (ding) note
    let soundsInPreset = []; // filling this one with {name, hint} sound objects
    for (let sound of currentSounds) {
      let soundObj = helpers.getSoundByName(db, sound);
      soundsInPreset.push({name: soundObj.name, hint: soundObj.hint});
    }
    return soundsInPreset;
  }

  choosePresetOption = (presetId) => {
    const {db, dispatch} = this.props;
    chooseCurrentPreset(db, presetId)(dispatch);
  }

  chooseNote = (note) => {
    const {db, dispatch} = this.props;
  }

}
