https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

Project1
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click', function (e) {
    console.log(e)//mouseclick
    console.log(e.target)//kis target se ye event aaya h
    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }
  })   
})

Project 2
const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
  e.preventDefault()//stops the form from submitting automatically, allowing the developer to control what happens next 

  const height = parseInt(document.querySelector('#height').value)//retrieves the current value
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Pls give a valid height`
  } else if(weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Pls give a valid weight`
  }
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
})

Project3
document.getElementById('clock')
//setInterval in javascript allows to run a block of code over and over again
setInterval(function () {
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)