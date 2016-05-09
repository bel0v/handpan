import * as helpers from './dbhelpers.js'
/*Action Creators*/

const chooseCurrentPreset = (db, presetId) => {
  return (dispatch) => {
    let newCurrentPreset = helpers.getPresetById(db, presetId);
    dispatch(updatePreset(newCurrentPreset));
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

module.exports = {
  chooseCurrentPreset,
  editPreset
}