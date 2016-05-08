
export const initialState = {
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

      // есть в пресетах, но нет в декларации
      // {id:'', name:'Ab4', hint:''},
      // {id:'', name:'D#4', hint:''},
      // {id:'', name:'Db4', hint:''},
      // есть в декларации, но нет в пресете
      // Eb5 (ми-бем.)

      {id:'1d', name:'C#3', hint:'до-ди.'},
      {id:'2d', name:'D3', hint:'ре'}, 
      {id:'3d', name:'E3', hint:'ми'}, 
      {id:'4d', name:'F3', hint:'фа'}, 
      {id:'5d', name:'F#3', hint:'фа-ди.'},
      {id:'6d', name:'G3', hint:'соль'}, 

      {id:'1s', name:'G3', hint:'соль'}, 
      {id:'2s', name:'G#3', hint:'соль-ди.'},
      {id:'3s', name:'A3', hint:'ля'}, 
      {id:'4s', name:'Bb3', hint:'си-бем.'},
      {id:'5s', name:'B3', hint:'си'},
      {id:'6s', name:'C4', hint:'до'}, 
      {id:'7s', name:'C#4', hint:'до-ди.'},
      {id:'8s', name:'D4', hint:'ре'}, 
      {id:'9s', name:'Eb4', hint:'ми-бем.'},
      {id:'10s', name:'E4', hint:'ми'}, 
      {id:'11s', name:'F4', hint:'фа'}, 
      {id:'12s', name:'F#4', hint:'фа-ди.'},
      {id:'13s', name:'G4', hint:'соль'},
      {id:'14s', name:'G#4', hint:'соль-ди.'},
      {id:'15s', name:'A4', hint:'ля'}, 
      {id:'16s', name:'B4', hint:'си'}, 
      {id:'17s', name:'C5', hint:'до'}, 
      {id:'18s', name:'C#5', hint:'до-ди.'},
      {id:'19s', name:'D5', hint:'ре'}
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


