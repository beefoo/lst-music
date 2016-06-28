var CONFIG = {

  debug: true,

  chord: {
    count: 5,
    cord: {
      height: 0.1,
      curveRatio: 0.45,
      strokeStyle: '#847b58',
      lineWidth: 5,
      maxVelocity: 4, // max velocity of user's gesture in px/s
      ampMin: 0.1, // min oscillation height in px
      oscRange: [0.005, 0.03], // frequency / oscillation speed; lower means slower
      tensityRange: [0.1, 0.25], // how tense the string is; lower means less tense
      ampRange: [1, 20] // starting perpendicular height of oscillating string in px
    }
  },

  creature: {
    strokeColor: [255, 255, 255],
    strokeWidth: 20,
    strokeMs: 1000
  }
};
