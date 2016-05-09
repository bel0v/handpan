import React from 'react'
import PanContainer from './containers/PanContainer.jsx'
import PresetContainer from './containers/PresetContainer.jsx'
import ProceedButtons from './components/ProceedButtons.jsx'
import { connect } from 'react-redux'
import {chooseCurrentPreset, saveCustomPreset} from './redux/actions.js'


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
    const {canBeSaved} = this.props;
    return (
      <div className = 'main-wrapper'>
        <PresetContainer />
        <PanContainer />
        <ProceedButtons onClickSave = {this.onClickSave} saveEnabled={canBeSaved}/>
      </div>
    )
  }

  onClickSave = () => {
    const {canBeSaved, dispatch, currentPreset, db} = this.props;
    if (!canBeSaved) return;

    saveCustomPreset(db, currentPreset)(dispatch);

  }


  onClickProceed = () => {
  }

}

