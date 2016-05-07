//   var newCurrentPreset = jsObjects.filter(function( obj ) {
//   return obj.b == 6;
// });


/*Action Creators*/

const chooseCurrentPreset = (db, presetId) => {
  return (dispatch) => {
    let newCurrentPreset = db.presets.filter(function( preset ) {
      return preset.id === presetId;
    })[0];
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