import React from 'react'
import PanContainer from './containers/PanContainer.jsx'
import PresetContainer from './containers/PresetContainer.jsx'
import ProceedButtons from './components/ProceedButtons.jsx'
import PlayersContainer from './components/PlayersContainer.jsx'
import { connect } from 'react-redux'
import {chooseCurrentPreset, saveCustomPreset} from './redux/actions.js'
import * as helpers from './redux/dbhelpers.js'

@connect(
  state => ({
    currentPreset: state.currentPreset,
    db: state.db,
    canBeSaved: state.canBeSaved
  })
)
export default class App extends React.Component {
  constructor(props) {
    super(props);
    const {db, currentPreset, dispatch} = this.props;
    chooseCurrentPreset(db, 'p1')(dispatch);

  }
  render() {
    const {canBeSaved, db, currentPreset} = this.props;
    return (
      <div className = 'main-wrapper'>
        <PresetContainer/>
        <PanContainer sounds={currentPreset.sounds ? currentPreset.sounds : []} db={db}/>
        <ProceedButtons onClickProceed = {this.onClickProceed} saveEnabled={canBeSaved}/>
        <PlayersContainer sounds = {db.sounds}/>
      </div>
    )
  }

  onClickSave = () => {
    const {canBeSaved, dispatch, currentPreset, db} = this.props;
    if (!canBeSaved) return;

    saveCustomPreset(db, currentPreset)(dispatch);
  }

  
  onClickProceed = () => {
    this.onClickSave();
    this.writePresetToLocalStorage()
    window.location.href = '/order';
  }

  writePresetToLocalStorage = () => {
    const {currentPreset, db} = this.props;  
    let soundsArr = currentPreset.sounds.map((s, index) => {
      let sObj = helpers.getSoundByName(db, s);
      return `${index == 0 ? 'динг' : index}: ${sObj.name}(${sObj.hint})`;
    });
    let sendString = `Пре-set ${currentPreset.name === 'Мой' ? 'свой' : currentPreset.name}\n${soundsArr.join(', ')}`
    localStorage.setItem('panConstructor',sendString);
  }

}