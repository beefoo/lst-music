var CONFIG = {
  debug: true,
  creatureCount: 1,
  maxVelocity: 4, // max velocity of user's gesture in px/s

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
    strokeMs: 1000,
    transitionMs: 2000,
    transitionZ: 0.5,
    teachMs: 4000,
    strokeColorTransition: [103, 95, 95], // gray
    strokeColorRangeTeach: [[248, 82, 82], [148, 255, 111]], // red -> green
    network: {

    }
  },

  player: {}
};

var NOTES = {
  'e': {'file': 'audio/harp_E3.mp3', 'pitch': 0.35, 'len': 0.81},
  'f': {'file': 'audio/harp_F3.mp3', 'pitch': 0.4, 'len': 0.79},
  'g': {'file': 'audio/harp_G3.mp3', 'pitch': 0.45, 'len': 0.77},
  'a': {'file': 'audio/harp_A3.mp3', 'pitch': 0.5, 'len': 0.75},
  'b': {'file': 'audio/harp_B3.mp3', 'pitch': 0.55, 'len': 0.73},
  'c': {'file': 'audio/harp_C3.mp3', 'pitch': 0.6, 'len': 0.71},
  'd': {'file': 'audio/harp_D3.mp3', 'pitch': 0.65, 'len': 0.69}
};

var CHORDS = {
  'c':  {'notes':['c','e','g','c','e']},
  'am': {'notes':['a','e','a','c','e']},
  'f':  {'notes':['a','f','a','c','f']},
  'em': {'notes':['b','e','g','b','e']},
  'dm': {'notes':['d','a','d','f','a']},
  'g':  {'notes':['b','d','g','b','g']}
};
