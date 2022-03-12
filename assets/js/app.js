// string measures
const cmMeasure = 'cm'
const sqMeasure = 'cm²'
// PI value
const PI = Math.PI.toFixed(4)
// new try
let squareNewCalculate = false
let triangleNewCalculate = false
let circleNewCalculate = false


// SQUARE VARIABLES
const squareBaseInput = document.querySelector('#square-base-input')
const squarePerimeterOutput = document.querySelector('#sq-perimeter-output')
const squareAreaOutput = document.querySelector('#sq-area-output')
const squareBtn = document.querySelector('#square-calculate-btn')
const squareBtnText = document.querySelector('#square-btn-text')
// TRIANGLE VARIABLES
const triangleBaseInput = document.querySelector('#triangle-base-input')
const triangleSide1Input = document.querySelector('#triangle-side1-input')
const triangleSide2Input = document.querySelector('#triangle-side2-input')
const triangleHeightInput = document.querySelector('#triangle-height-input')
const trianglePerimeterOutput = document.querySelector('#triangle-perimeter-output')
const triangleAreaOutput = document.querySelector('#triangle-area-output')
const triangleBtn = document.querySelector('#triangle-calculate-btn')
const triangleBtnText = document.querySelector('#triangle-btn-text')
// CIRCLE VARIABLES
const circleRadiusInput = document.querySelector('#circle-radius-input')
const circlePerimeterOutput = document.querySelector('#circle-perimeter-output')
const circleAreaOutput = document.querySelector('#circle-area-output')
const circleBtn = document.querySelector('#circle-calculate-btn')
const circleBtnText = document.querySelector('#circle-btn-text')

// UTILITIES
const decimalIntegerResult = result => {
  if (result % 1 !== 0) return result.toFixed(2)
  return result
}

const changeBtnText = (newCalculate, btnText) => {
  if(!newCalculate) btnText.innerText = "De nuevo"
  else btnText.innerText = "Calcular"
}

// FIGURE MATH FUNCTIONS
const squarePerimeter = base => decimalIntegerResult(base * 4)
const squareArea = base => decimalIntegerResult(Math.pow(base, 2))
const trianglePerimeter = (base, side1, side2) => decimalIntegerResult(base + side1 + side2)
const triangleArea = (base, height) => decimalIntegerResult((base * height) / 2)
const circleDiameter = radius => decimalIntegerResult(radius * 2)
const circlePerimeter = radius => decimalIntegerResult(PI * circleDiameter(radius))
const circleArea = radius => decimalIntegerResult(PI * Math.pow(radius, 2))

// SQUARE BUTTON EVENTS
const recalculateSquareResults = () => {
  squareBaseInput.value = ''
  squarePerimeterOutput.value = `0 ${cmMeasure}`
  squareAreaOutput.value = `0 ${sqMeasure}`
  squareBaseInput.disabled = false
  squareBaseInput.focus()
  changeBtnText(squareNewCalculate, squareBtnText)
  squareNewCalculate = false
}

const calculateSquareResults = (event) => {
  event.preventDefault()
  if (!squareBaseInput.value) return
  if (squareNewCalculate) {
    recalculateSquareResults()
    return
  }
  const squareBase = Number(squareBaseInput.value)
  squarePerimeterOutput.value = `${squarePerimeter(squareBase)} ${cmMeasure}`
  squareAreaOutput.value = `${squareArea(squareBase)} ${sqMeasure}`
  squareBaseInput.disabled = true
  changeBtnText(squareNewCalculate, squareBtnText)
  squareNewCalculate = true
}

// TRIANGLE BUTTON EVENTS
const recalculateTriangleResults = () => {
  triangleBaseInput.value = ''
  triangleBaseInput.disabled = false
  triangleSide1Input.value = ''
  triangleSide1Input.disabled = false
  triangleSide2Input.value = ''
  triangleSide2Input.disabled = false
  triangleHeightInput.value = ''
  triangleHeightInput.disabled = false
  trianglePerimeterOutput.value = `0 ${cmMeasure}`
  triangleAreaOutput.value = `0 ${sqMeasure}`
  triangleBaseInput.focus()
  changeBtnText(triangleNewCalculate, triangleBtnText)
  triangleNewCalculate = false
}

const calculateTriangleResults = (event) => {
  event.preventDefault()
  if (
      !triangleBaseInput.value
      || !triangleSide1Input.value
      || !triangleSide2Input.value
      || !triangleHeightInput.value
     )
  return
  if (triangleNewCalculate) {
    recalculateTriangleResults()
    return
  }
  const triangleBase = Number(triangleBaseInput.value)
  const triangleSide1 = Number(triangleSide1Input.value)
  const triangleSide2 = Number(triangleSide2Input.value)
  const triangleHeight = Number(triangleHeightInput.value)
  trianglePerimeterOutput.value =
  `${trianglePerimeter(triangleBase, triangleSide1, triangleSide2)} ${cmMeasure}`
  triangleAreaOutput.value =
  `${triangleArea(triangleBase, triangleHeight)} ${sqMeasure}`
  triangleBaseInput.disabled = true
  triangleSide1Input.disabled = true
  triangleSide2Input.disabled = true
  triangleHeightInput.disabled = true
  changeBtnText(triangleNewCalculate, triangleBtnText)
  triangleNewCalculate = true
}

// CIRCLE BUTTON EVENTS
const recalculateCircleResults = () => {
  circleRadiusInput.value = ''
  circlePerimeterOutput.value = `0 ${cmMeasure}`
  circleAreaOutput.value = `0 ${sqMeasure}`
  circleRadiusInput.disabled = false
  circleRadiusInput.focus()
  changeBtnText(circleNewCalculate, circleBtnText)
  circleNewCalculate = false
}

const calculateCircleResults = (event) => {
  event.preventDefault()
  if (!circleRadiusInput.value) return
  if (circleNewCalculate) {
    recalculateCircleResults()
    return
  }
  const circleRadius = Number(circleRadiusInput.value)
  circlePerimeterOutput.value = `${circlePerimeter(circleRadius)} ${cmMeasure}`
  circleAreaOutput.value = `${circleArea(circleRadius)} ${sqMeasure}`
  circleRadiusInput.disabled = true
  changeBtnText(circleNewCalculate, circleBtnText)
  circleNewCalculate = true
}

squareBtn.addEventListener('click', calculateSquareResults)
triangleBtn.addEventListener('click', calculateTriangleResults)
circleBtn.addEventListener('click', calculateCircleResults)