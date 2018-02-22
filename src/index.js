module.exports = function solveEquation(equation) {
  // your implementation

  var devidedEquation = equation.split(' ');
  var a,b,c;
  a = devidedEquation[0];
  if (devidedEquation[3] == '+') {
    b = devidedEquation[4];
  } else {
    b = 0-(devidedEquation[4]);
  }

  if (devidedEquation[7] == '+') {
    c = devidedEquation[8];
  } else {
    c = 0-(devidedEquation[8]);
  }

  var d,x1,x2;
  d = b*b - 4*a*c;
  x1 = ((-b) + Math.round(Math.sqrt(d))) / (2*a);
  x2 = ((-b) - Math.round(Math.sqrt(d))) / (2*a);

  var res = [];
  if (x1 < x2) { 
    res.push(x1);
    res.push(x2);
  } else {
    res.push(x2);
    res.push(x1);
  }
  return res;
}
