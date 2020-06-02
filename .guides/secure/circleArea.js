function circleArea(radius){
//   if (typeof radius !== "number") {
//     throw "Radius must be a number"
//   }
//   if (radius < 0) {
//     throw "Radius must be a positive number"
//   }
  return Math.PI * Math.pow(radius, 2)
}

module.exports = circleArea