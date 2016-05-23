import React from 'react';

const PlayersContainer = (props) => 
  <div className = 'playersContainer'>
    {
      props.sounds.map(function(sound){
        return (
          <audio 
            key = {'player--' + sound.id} 
            id = {'player-' + sound.id} 
            preload = 'auto' 
            src = {encodeURIComponent('sounds/'+ sound.id +'.mp3')}/>
        )
      })
    }
  </div>

export default PlayersContainer;