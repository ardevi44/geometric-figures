// string measures
const cmMeasure = 'cm'
const sqMeasure = 'cm²'
// PI value
const PI = Math.PI.toFixed(4)
// Is a new try
let newCalculate = false


// SQUARE VARIABLES
const squareBaseInput = document.querySelector('#square-base-input')
const squarePerimeterOutput = document.querySelector('#sq-perimeter-output')
const squareAreaOutput = document.querySelector('#sq-area-output')
const squareBtn = document.querySelector('#square-calculate-btn')
const squareBtnText = document.querySelector('#square-btn-text')

// SQUARE FUNCTIONS
const squarePerimeter = base => {
  return decimalIntegerResult(base * 4)
}

const squareArea = base => {
  return decimalIntegerResult(Math.pow(base, 2))
}

const decimalIntegerResult = result => {
  if (result % 1 !== 0) return result.toFixed(2)
  return result
}

// SQUARE BUTTON EVENTS
const recalculateSquareResults = () => {
  squareBaseInput.value = ''
  squarePerimeterOutput.value = `0 ${cmMeasure}`
  squareAreaOutput.value = `0 ${sqMeasure}`
  squareBaseInput.disabled = false
  squareBaseInput.focus()
  newCalculate = false
  squareBtnText.innerText = "Calcular"
}

const calculateSquareResults = (event) => {
  event.preventDefault();
  if (!squareBaseInput.value) return 
  if(newCalculate) {
    recalculateSquareResults()
    return
  }
  const squareBase = Number(squareBaseInput.value)
  squarePerimeterOutput.value = `${squarePerimeter(squareBase)} ${cmMeasure}`
  squareAreaOutput.value = `${squareArea(squareBase)} ${sqMeasure}`
  squareBaseInput.disabled = true
  squareBtnText.innerText = "Nuevo valor"
  newCalculate = true
}

squareBtn.addEventListener('click', calculateSquareResults)

// LOGIC PENDING ...

// const trianglePerimeter = (base, side1, side2) => `${base + side1 + side2} ${cmMeasure}`
// const areaTriangulo = (base, height) => `${(base * triangleHeight) / 2} ${squareMeasure}`


// const circleDiameter = (radius) =>  radius * 2
// const circlePerimeter = () => `${(PI * circleDiameter()).toFixed(2)} ${cmMeasure}`
// const circleArea = (radius) => `${(PI * Math.pow(radius, 2)).toFixed(2)} ${squareMeasure}`
