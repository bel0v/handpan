const getPresetById = (db, presetId) => 
  db.presets.filter(function( preset ) {
      return preset.id === presetId;
    })[0]

const getPresetByName = (db, presetName) => 
  db.presets.filter(function( preset ) {
      return preset.name === presetName;
    })[0]

const getSoundByName = (db, soundName, noDings = false) => {
  return db.sounds.filter(function( sound ) {
      return sound.name === soundName && (!noDings || !(~sound.id.indexOf('d')));
    })[0]
}

const playSound = (soundId, isLooped = false) => { //kinda anti-pattern, but this is more transparent.
  let player = document.getElementById('player-'+soundId);
  let soundPlayed = false;
  if(!soundPlayed) {
    soundPlayed = true;
    setTimeout(function() {
      soundPlayed = false;
    }, player.duration);
    player.currentTime = 0;
    if (isLooped){
      player.loop = true;
    }
    player.play();
  }
};

const stopSound = (sound) => { //kinda anti-pattern, but this is more transparent.
  let player = document.getElementById('player-'+sound);
  player.loop = false;
  player.onended;
};


module.exports = {
  getPresetById,
  getPresetByName,
  getSoundByName,
  stopSound,
  playSound
}