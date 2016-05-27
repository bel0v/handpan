
export const initialState = {
  currentPreset: {},
  customPreset: {id: 'pCustom', name: 'Мой', sounds:[]},
  canBeSaved: true,
  db: {
    presets: [
      // {id: 'p0', name: 'Мой'}, //fake
      {id: 'p1', name: '№1', sounds:["C#3","G#3","A3","C#4","Eb4","E4","F#4","G#4","B4"]},
      {id: 'p2', name: '№2', sounds:["C#3","G#3","B3","C#4","Eb4","E4","F#4","G#4","B4"]},
      {id: 'p3', name: '№3', sounds:["D3","A3","Bb3","C4","D4","E4","F4","G4","A4"]},

      {id: 'p4', name: '№4', sounds:["D3","A3","Bb3","D4","E4","F4","G4","A4","C5"]},

      {id: 'p5', name: '№5', sounds:["D3","A3","C4","D4","E4","F4","G4","A4","C5"]},

      {id: 'p6', name: '№6', sounds:["D3","A3","C4","D4","F4","G4","A4","C5","D5"]},

      {id: 'p7', name: '№7', sounds:["D3","G3","A3","B3","D4","E4","F#4","G4","A4"]},

      {id: 'p8', name: '№8', sounds:["E3","G3","B3","C4","D4","E4","F#4","G4","B4"]},

      {id: 'p9', name: '№9', sounds:["F3","C4","C#4","Eb4","F4","G4","G#4","C5","C#5"]},
      {id: 'p10', name: '№10', sounds:['G3','C4','D4','Eb4','F4','G4','G#4','B4','C5']},
    ],
    sounds: [
      {id:'d1', name:'C#3', hint:'до-ди.'},
      {id:'d2', name:'D3', hint:'ре'}, 
      {id:'d3', name:'E3', hint:'ми'}, 
      {id:'d4', name:'F3', hint:'фа'}, 
      {id:'d5', name:'G3', hint:'соль'}, 

      {id:'s1', name:'G3', hint:'соль'}, 
      {id:'s2', name:'G#3', hint:'соль-ди.'},
      {id:'s3', name:'A3', hint:'ля'}, 
      {id:'s4', name:'Bb3', hint:'си-бем.'},
      {id:'s5', name:'B3', hint:'си'},
      {id:'s6', name:'C4', hint:'до'}, 
      {id:'s7', name:'C#4', hint:'до-ди.'},
      {id:'s8', name:'D4', hint:'ре'}, 
      {id:'s9', name:'Eb4', hint:'ми-бем.'},
      {id:'s10', name:'E4', hint:'ми'}, 
      {id:'s11', name:'F4', hint:'фа'}, 
      {id:'s12', name:'F#4', hint:'фа-ди.'},
      {id:'s13', name:'G4', hint:'соль'},
      {id:'s14', name:'G#4', hint:'соль-ди.'},
      {id:'s15', name:'A4', hint:'ля'}, 
      {id:'s16', name:'B4', hint:'си'}, 
      {id:'s17', name:'C5', hint:'до'}, 
      {id:'s18', name:'C#5', hint:'до-ди.'},
      {id:'s19', name:'D5', hint:'ре'},
      {id:'s20', name:'Eb5', hint:'ми-бем.'}
    ]    
  }
}


export const preset = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PRESET":
      return Object.assign({}, state, {
        currentPreset: action.newCurrentPreset
      });
    case "ADD_PRESET":
      return Object.assign({}, state, {
        customPreset: action.newCustomPreset
      });
    case "TOGGLE_SAVING":
      return Object.assign({}, state, {
        canBeSaved: action.savingState
      });
    case "SAVE_CUSTOM_PRESET":
      //TODO: write to local storage
      return Object.assign({}, state, {
        customPreset: action.preset
      });
    default:
      return state;
  }
}


