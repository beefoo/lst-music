(function() {
  window.UTIL = {};

  UTIL.floorToNearest = function(num, nearest){
    return nearest * Math.floor(num/nearest);
  };

  // Linear interpolation
  UTIL.lerp = function(a, b, t) {
    return a + (b-a)*t;
  };

  // Limit a given number if it is outside of given range.
  UTIL.lim = function(n, n0, n1) {
    if (n < n0) { return n0; }
    else if (n >= n1) { return n1; }
    else { return n; }
  };

  // Takes a value as well as an upper and lower limit, and returns a ratio 0 to 1
  UTIL.norm = function(a, a0, a1) {
    return UTIL.lim((a-a0)/(a1-a0), 0, 1);
  };

  // Takes a value and returns -1 or 1 if it's positive or negative
  UTIL.sign = function(n) {
    if (n >= 0) { return 1 } else { return -1 };
  };

  // Linear interpolate between two colors, each as RGBA array.
  UTIL.lerpColor = function(a, b, t) {
    var c1 = lerp(a[0], b[0], t);
    var c2 = lerp(a[1], b[1], t);
    var c3 = lerp(a[2], b[2], t);
    var c4 = lerp(a[3], b[3], t);
    return [c1, c2, c3, c4];
  };

  // Calculates line segment intersection
  UTIL.lineIntersect = function(A, B, E, F) {
    var ip, a1, a2, b1, b2, c1, c2;
    // calculate
    a1 = B.y-A.y; a2 = F.y-E.y;
    b1 = A.x-B.x; b2 = E.x-F.x;
    c1 = B.x*A.y - A.x*B.y; c2 = F.x*E.y - E.x*F.y;
    // det
    var det=a1*b2 - a2*b1;
    // if lines are parallel
    if (det == 0) { return false; }
    // find point of intersection
    var xip = (b1*c2 - b2*c1)/det;
    var yip = (a2*c1 - a1*c2)/det;
    // now check if that point is actually on both line
    // segments using distance
    if (Math.pow(xip - B.x, 2) + Math.pow(yip - B.y, 2) >
        Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2))
    { return false; }
    if (Math.pow(xip - A.x, 2) + Math.pow(yip - A.y, 2) >
        Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2))
    { return false; }
    if (Math.pow(xip - F.x, 2) + Math.pow(yip - F.y, 2) >
        Math.pow(E.x - F.x, 2) + Math.pow(E.y - F.y, 2))
    { return false; }
    if (Math.pow(xip - E.x, 2) + Math.pow(yip - E.y, 2) >
        Math.pow(E.x - F.x, 2) + Math.pow(E.y - F.y, 2))
    { return false; }
    // else it's on both segments, return it
    return {x: xip, y: yip};
  };

})();
