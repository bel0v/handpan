import React from 'react'
import PresetPalette from '../components/PresetPalette.jsx'
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
  componentDidMount(){
    // $('.dropdown-menu a').on('click', function(){    
    //     $(this).parent().parent().prev().html($(this).html() + '<span class="caret"></span>');    
    // })
  }

  render() {
    const {currentPreset, db, dispatch} = this.props;
    let soundObj = helpers.getSoundByName(db, currentPreset.sounds[0]);
    let preset = {
      id: currentPreset.id,
      name: currentPreset.name,
      hint: soundObj.hint,
      ding: soundObj.name}
    return (
      <PresetPalette preset={preset} db={db} choosePresetOption={this.choosePresetOption}/>
    )
  }

  choosePresetOption = (presetId) => {
    const {db, dispatch} = this.props;
    chooseCurrentPreset(db, presetId)(dispatch);
  }

}
