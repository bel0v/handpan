import * as helpers from './dbhelpers.js'
/*Action Creators*/

const chooseCurrentPreset = (db, presetId) => {
  return (dispatch) => {
    let newCurrentPreset = helpers.getPresetById(db, presetId);
    dispatch(updatePreset(newCurrentPreset));
  }
}

const saveCustomPreset = (db, currentPreset) => {
  return (dispatch) => {
    if (currentPreset.name == 'Мой'){ 
      // if custom preset in db, remove
      let customPresetDbIndex = db.presets.indexOf(helpers.getPresetByName(db, 'Мой'));
      if (~customPresetDbIndex) db.presets.splice(customPresetDbIndex, 1);
    }

    // add current custom preset to db
    if(!db.presets.find(p => p.id == currentPreset.id)) db.presets.unshift(currentPreset);
    dispatch(savePreset(currentPreset));
  }
}

const addCustomPreset = (db, newPreset) => {
    if(!db.presets.find(p => p.id == newPreset.id)) {db.presets.unshift(newPreset);}
    dispatch(addPreset(newPreset));
}



const editPreset = (db, sounds) => {
  return (dispatch) => {
    let newCurrentPreset = {id: sounds.join('_'), name: 'Мой', sounds: sounds};
    dispatch(updatePreset(newCurrentPreset));
    if (db.presets[0].id === 'p0') {db.presets.shift()}
    newCurrentPreset.id = 'p0';
    dispatch(addPreset(newCurrentPreset));
  } 
}

const updatePreset = (newCurrentPreset) =>{
  return {
    type: 'UPDATE_PRESET',
    newCurrentPreset
  }
}

const addPreset = (newCustomPreset) =>{
  return {
    type: 'ADD_PRESET',
    newCustomPreset
  }
}

const toggleSaving = (savingState) =>{
  return {
    type: 'TOGGLE_SAVING',
    savingState
  }
}

const savePreset = (preset) => {
  return{
    type: 'SAVE_CUSTOM_PRESET',
    preset
  }
}


module.exports = {
  chooseCurrentPreset,
  editPreset,
  toggleSaving,
  updatePreset,
  saveCustomPreset,
  addCustomPreset
}