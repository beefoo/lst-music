var CONFIG = {
  debug: true,
  trainer: true,
  creatureCount: 1,
  maxVelocity: 4, // max velocity of user's gesture in px/s
  apiUrl: '/api',

  chord: {
    transitionMs: 500,
    cord: {
      height: 0.1,
      curveRatio: 0.45,
      strokeStyle: '#847b58',
      lineWidth: 5,
      ampMin: 0.1, // min oscillation height in px
      oscRange: [0.005, 0.03], // frequency / oscillation speed; lower means slower
      tensityRange: [0.1, 0.25], // how tense the string is; lower means less tense
      ampRange: [1, 20] // starting perpendicular height of oscillating string in px
    }
  },

  creature: {
    strokeColor: [255, 255, 255], // white
    strokeWidth: 20,
    strokeMs: 2000,
    transitionMs: 1000,
    transitionZ: 0.5,
    teachMs: 4000,
    strokeColorTransition: [103, 95, 95], // gray
    strokeColorRangeTeach: [[248, 82, 82], [148, 255, 111]], // red -> green
    trainingUrl: 'api/paths/index',
    network: {

    }
  },

  player: {}
};

// https://github.com/gleitz/midi-js-soundfonts/tree/master/FluidR3_GM/orchestral_harp-mp3
var NOTES = {
  'e':  {'file': 'audio/harp_E3.mp3',  'pitch': 0.35,  'len': 0.81},
  'f':  {'file': 'audio/harp_F3.mp3',  'pitch': 0.4,   'len': 0.79},
  'fs': {'file': 'audio/harp_Gb3.mp3', 'pitch': 0.425, 'len': 0.78},
  'g':  {'file': 'audio/harp_G3.mp3',  'pitch': 0.45,  'len': 0.77},
  'a':  {'file': 'audio/harp_A3.mp3',  'pitch': 0.5,   'len': 0.75},
  'b':  {'file': 'audio/harp_B3.mp3',  'pitch': 0.55,  'len': 0.73},
  'c':  {'file': 'audio/harp_C3.mp3',  'pitch': 0.6,   'len': 0.71},
  'd':  {'file': 'audio/harp_D3.mp3',  'pitch': 0.65,  'len': 0.69}
};

// http://www.jamplay.com/tools/guitar-chords/1-standard
var CHORDS = {
  'c':  {'notes':['c','e','g','c','e']},
  'am': {'notes':['a','e','a','c','e']},
  'f':  {'notes':['a','f','a','c','f']},
  'em': {'notes':['b','e','g','b','e']},
  'dm': {'notes':['d','a','d','f','a']},
  'g':  {'notes':['b','d','g','b','g']},
  'd':  {'notes':['d','a','d','fs','a']}
};

// https://tabs.ultimate-guitar.com/a/andrew_lloyd_webber/memory_ver2_crd.htm
var PROGRESSION = ['c','am','f','em','dm','am','g','c','em','f','em','f','em','c','g','em','d','em','c','d'];
