import * as helpers from './dbhelpers.js'
/*Action Creators*/

const chooseCurrentPreset = (db, presetId) => {
  return (dispatch) => {
    let newCurrentPreset = helpers.getPresetById(db, presetId);
    dispatch(updatePreset(newCurrentPreset));
  }
}


const updatePreset = (newCurrentPreset) =>{
  return {
    type: 'UPDATE_PRESET',
    newCurrentPreset
  }
}

module.exports = {
  chooseCurrentPreset
}