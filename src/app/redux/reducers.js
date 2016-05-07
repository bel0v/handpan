
const initialState = {
  currentPreset: {},
  db: {
    presets: [
      {id: 'p1', name: '№1', sounds:["C#3","G#3","A3","C#4","Eb4","E4","F#4","G#4","B4"]},
      {id: 'p2', name: '№2', sounds:["C#3","G#3","B3","C#4","D#4","E4","F#4","G#4","B4"]},
      {id: 'p3', name: '№3', sounds:["D3","A3","Bb3","C4","d4","e4","f4","g4","a4"]},
      {id: 'p4', name: '№4', sounds:["D3","A3","Bb3","D4","E4","F4","G4","A4","C5"]},
      {id: 'p5', name: '№5', sounds:["D3","A3","C4","D4","E4","F4","G4","A4","C5"]},
      {id: 'p6', name: '№6', sounds:["D3","A3","C4","D4","F4","G4","A4","C5","D5"]},
      {id: 'p7', name: '№7', sounds:["D3","G3","A3","B3","D4","E4","F#4","G4","A4"]},
      {id: 'p8', name: '№8', sounds:["E3","G3","B3","C4","D4","E4","F#4","G4","B4"]},
      {id: 'p9', name: '№9', sounds:["F3","C4","Db4","Eb4","F4","G4","Ab4","C5","C#5"]},
      {id: 'p10', name: '№10', sounds:["F#3","B3","C#4","D4","E4","F#4","G4","B4","C#5"]},
      {id: 'p11', name: '№11', sounds:['G3','C4','D4','Eb4','F4','G4','Ab4','B4','C5','D5']},
    ],
    sounds: [
      {name: 'A3'}, {name: 'A4'}, {name: 'Ab4'},{name: 'B3'},
      {name: 'B4'}, {name: 'Bb3'},{name: 'C#3'},{name: 'C#4'},
      {name: 'C#5'},{name: 'C4'}, {name: 'C5'}, {name: 'D#4'},
      {name: 'D3'}, {name: 'D4'}, {name: 'D5'}, {name: 'Db4'},
      {name: 'E3'}, {name: 'E4'}, {name: 'Eb4'},{name: 'F#3'},
      {name: 'F#4'},{name: 'F3'}, {name: 'F4'}, {name: 'G#3'},
      {name: 'G#4'},{name: 'G3'}, {name: 'G4'}
    ]    
  }
}

export const preset = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PRESET":
      return Object.assign({}, state, {
        currentPreset: action.newCurrentPreset
      });
    default:
      return state;
  }
}


