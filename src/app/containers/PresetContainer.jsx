import React from 'react'
import PresetPalette from '../components/PresetPalette.jsx'
import PresetPaletteHeader from '../components/PresetPaletteHeader.jsx'
import { connect } from 'react-redux'
import * as helpers from '../redux/dbhelpers.js'
import {chooseCurrentPreset, editPreset, toggleSaving} from '../redux/actions.js'

@connect(
  state => ({
    currentPreset: state.currentPreset,
    customPreset: state.customPreset,
    db: state.db,
    canBeSaved: state.canBeSaved // not if there are duplicates
  })
)
export default class PresetContainer extends React.Component {
  constructor(props){
    super(props);
    this.chosenNotes = []; //these are to be filtered out of all available sounds
    this.currentSounds = this.getCurrentSounds(props.currentPreset)
  }
  componentWillReceiveProps(nextProps){
    this.currentSounds = this.getCurrentSounds(nextProps.currentPreset)
  }

  render() {
    const {currentPreset, db, dispatch} = this.props;
    let soundObj = helpers.getSoundByName(db, currentPreset.sounds[0]);
    let preset = {
      id: currentPreset.id,
      name: currentPreset.name,
      hint: soundObj.hint,
      ding: soundObj.name}

    let allSounds = this.getAllSounds(db.sounds, soundObj.name);

    return (
      <div className='preset-palette'>
      <PresetPaletteHeader 
        preset={preset} 
        presetsList={db.presets} 
        choosePresetOption={this.choosePresetOption}/>
      <PresetPalette 
        preset={preset} 
        currentSounds={this.currentSounds}
        allSounds={allSounds}
        chooseNote={this.chooseNote}
      />
      </div>
    )
  }

  getCurrentSounds = (currentPreset) =>{
    let {db, dispatch} = this.props;
    let currentSounds = currentPreset.sounds.slice();
    currentSounds.shift(); // remove the first (ding) note
    
    let duplicates = this.getDuplicates(currentSounds);
    (duplicates.length > 0) ? dispatch(toggleSaving(false)) : dispatch(toggleSaving(true));

    let soundsInPreset = []; // filling this one with {name, hint} sound objects
    for (let sound of currentSounds) {
      let soundObj = helpers.getSoundByName(db, sound);
      soundsInPreset.push({
        name: soundObj.name, 
        hint: soundObj.hint, 
        isDuplicate: (~duplicates.indexOf(soundObj.name) ? true : false)
      });
    }
    return soundsInPreset;
  }

  getAllSounds = (allsounds, ding) =>{
    let {db} = this.props;
    let forbidden = this.chosenNotes,
        sounds = allsounds.slice();

    if (!( ~forbidden.indexOf(ding))) forbidden.push(ding);
    //removing all forbidden sounds from allSounds array.
    for (let sound of forbidden) {
      let index = sounds.indexOf(helpers.getSoundByName(db, sound));
      sounds.splice(index, 1);
    }
    return sounds;
  }

  choosePresetOption = (presetId) => {
    const {db, dispatch} = this.props;
    chooseCurrentPreset(db, presetId)(dispatch);
  }

  chooseNote = (note, noteIndex) => {
    const {db, dispatch, currentPreset} = this.props;
    let curSounds = currentPreset.sounds.slice();
    curSounds[noteIndex] = note.name;
    editPreset(db, curSounds)(dispatch);
  }

  getDuplicates = (array) => {
    var uniq = array
    .map((item) => {
      return {count: 1, item: item}
    })
    .reduce((a, b) => {
      a[b.item] = (a[b.item] || 0) + b.count
      return a
    }, {})

    return Object.keys(uniq).filter((a) => uniq[a] > 1)
  }
}
