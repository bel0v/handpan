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

const playSound = (soundId) => { //kinda anti-pattern, but this is more transparent.
  let player = document.getElementById('player-'+soundId);
  let soundPlayed = false;
  if(!soundPlayed) {
    soundPlayed = true;
    setTimeout(function() {
      soundPlayed = false;
    }, 300);
    player.currentTime = 0;
    player.play();
  }
};

const stopSound = (sound) => { //kinda anti-pattern, but this is more transparent.
  let player = document.getElementById('player-'+sound);
  player.pause();
};


module.exports = {
  getPresetById,
  getPresetByName,
  getSoundByName,
  stopSound,
  playSound
}