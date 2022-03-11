// string measures
const cmMeasure = 'cm'
const sqMeasure = 'cm²'
// PI value
const PI = Math.PI.toFixed(4)
// Is a new try
let rectangleNewCalculate = false
let triangleNewCalculate = false


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

// UTILITIES
const decimalIntegerResult = result => {
  if (result % 1 !== 0) return result.toFixed(2)
  return result
}

const changeBtnText = (newTry, btn) => {
  if(!newTry) {
    btn.innerText = "Nuevo valor"
  } else {
    btn.innerText = "Calcular"
  }
}

// FIGURE FUNCTIONS
const squarePerimeter = base => decimalIntegerResult(base * 4)
const squareArea = base => decimalIntegerResult(Math.pow(base, 2))
const trianglePerimeter = (base, side1, side2) => decimalIntegerResult(base + side1 + side2)
const triangleArea = (base, height) => decimalIntegerResult((base * height) / 2)

// SQUARE BUTTON EVENTS
const recalculateSquareResults = () => {
  squareBaseInput.value = ''
  squarePerimeterOutput.value = `0 ${cmMeasure}`
  squareAreaOutput.value = `0 ${sqMeasure}`
  squareBaseInput.disabled = false
  squareBaseInput.focus()
  rectangleNewCalculate = false
  squareBtnText.innerText = "Calcular"
}

const calculateSquareResults = (event) => {
  event.preventDefault()
  if (!squareBaseInput.value) return 
  if (rectangleNewCalculate) {
    recalculateSquareResults()
    return
  }
  const squareBase = Number(squareBaseInput.value)
  squarePerimeterOutput.value = `${squarePerimeter(squareBase)} ${cmMeasure}`
  squareAreaOutput.value = `${squareArea(squareBase)} ${sqMeasure}`
  squareBaseInput.disabled = true
  squareBtnText.innerText = "Nuevo valor"
  rectangleNewCalculate = true
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
  triangleNewCalculate = false
  changeBtnText(triangleNewCalculate, triangleBtnText)
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

squareBtn.addEventListener('click', calculateSquareResults)
triangleBtn.addEventListener('click', calculateTriangleResults)

// LOGIC PENDING ...

// const circleDiameter = (radius) =>  radius * 2
// const circlePerimeter = () => `${(PI * circleDiameter()).toFixed(2)} ${cmMeasure}`
// const circleArea = (radius) => `${(PI * Math.pow(radius, 2)).toFixed(2)} ${squareMeasure}`
