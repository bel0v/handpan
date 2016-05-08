import React from 'react'
import PanContainer from './containers/PanContainer.jsx'
import PresetContainer from './containers/PresetContainer.jsx'
import { connect } from 'react-redux'
import {chooseCurrentPreset} from './redux/actions.js'


@connect(
  state => ({
    currentPreset: state.currentPreset,
    db: state.db
  })
)
export default class App extends React.Component {
  constructor(props) {
    super(props);
    const {db, currentPreset, dispatch} = this.props;
    chooseCurrentPreset(db, 'p1')(dispatch);
  }
  render() {
    // const {db, currentPreset} = this.props;
    return (
      <div className = 'main-wrapper'>
        <PresetContainer />
        <PanContainer />
      </div>
    )
  }
}
