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

const editPreset = (db, sounds) => {
  return (dispatch) => {
    let newCurrentPreset = {id: sounds.join('_'), name: 'Мой', sounds: sounds};
    dispatch(updatePreset(newCurrentPreset));
  } 
}

const updatePreset = (newCurrentPreset) =>{
  return {
    type: 'UPDATE_PRESET',
    newCurrentPreset
  }
}

const addCustomPreset = (newCustomPreset) =>{
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
  saveCustomPreset
}