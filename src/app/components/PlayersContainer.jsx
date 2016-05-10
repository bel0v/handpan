import React from 'react';

const PlayersContainer = (props) => 
  <div className = 'playersContainer'>
    {
      props.sounds.map(function(sound){
        return (
          <audio 
            key = {'player--' + sound.name} 
            id = {'player-' + sound.name} 
            preload = 'auto' 
            src = {encodeURIComponent('sounds/'+ sound.name +'.mp3')}/>
        )
      })
    }
  </div>

export default PlayersContainer;