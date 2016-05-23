import React from 'react'
import Pan from '../components/Pan.jsx'
import * as helpers from '../redux/dbhelpers.js'

export default class PanContainer extends React.Component {

  render() {

    let sounds = this.getSoundPaletteIds();

    return (
      <Pan sounds={sounds}/>
    )
  }

  getSoundPaletteIds = () => {
    const {sounds, db} = this.props;
    let soundIds = [];
    let panSounds = sounds.slice();
    if (panSounds.length) {
      let ding = panSounds.shift();
      let dingId = helpers.getSoundByName(db, ding).id;
      soundIds = panSounds.map(s => helpers.getSoundByName(db, s, true).id);
      soundIds.unshift(dingId);    
    }
    return soundIds;
  }
}