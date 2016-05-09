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
    currentPreset.name = 'Мой'
    db.presets.splice(db.presets.indexOf(helpers.getPresetByName(db, 'Мой')), 1);
    db.presets.unshift(currentPreset);
    dispatch(savePreset(currentPreset));
  }
}

const editPreset = (db, sounds) => {
  return (dispatch) => {
    let newCurrentPreset = {id: sounds.join('_'), name: '--', sounds: sounds};
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
  saveCustomPreset
}