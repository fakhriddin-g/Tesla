// Arrow
let up = document.querySelectorAll('.up')
let down = document.querySelectorAll('.down')
// Row
let row = document.querySelector('.row')
// Modal
let modalCar = document.querySelector('.modal .main-img')

let colorsBtn = document.querySelectorAll('.color')
let totalPrice = document.querySelector('.total-price')


let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.bg')
// Animation
let animationImg = document.querySelector('.hand')
let scaleBox = document.querySelector('.animation')
// Vkl
let airCondition = document.querySelector('.air-condition')
let airConditionCycle = document.querySelector('.air-condition-cyrcle')
let longRange = document.querySelector('.long-range')
let longRangeCycle = document.querySelector('.long-range-cyrcle')
let carViews = document.querySelectorAll('.car-view')
// let carViewCycle = document.querySelector('.car-cyrcle')

// Color Object
let colors = {
  black: 'url(../../public/img/black.png)',
  white: 'url(../../public/img/white.png)',
  biege: 'url(../../public/img/biege.png)'
}

let prices = {
  black: '0',
  white: '10',
  biege: '20'
}

colorsBtn.forEach(btn => {
  let key = btn.getAttribute('data-color')
  btn.onclick = () => {
    modalCar.style.backgroundImage = colors[key]
    totalPrice.innerHTML = prices[key]
  }
})

animationImg.onclick = () => {
  row.style.display = 'none'
  scaleBox.style.scale = '100'
  setTimeout(() => {
    modal.style.display = 'block'
    modalBg.style.display = 'block'
    scaleBox.style.display = 'none'
    animationImg.style.display = 'none'
  }, 500);
}

airCondition.onclick = () => {
  if (airConditionCycle.classList.contains('moved')) {
    airConditionCycle.classList.remove('moved')
  } else{
    airConditionCycle.classList.add('moved')
  }
}
longRange.onclick = () => {
  if (longRangeCycle.classList.contains('moved')) {
    longRangeCycle.classList.remove('moved')
  } else{
    longRangeCycle.classList.add('moved')
  }
}

carViews.forEach(carView => {
  let carViewCycle = carView.children
  console.log(carViewCycle);
  carView.onclick = () => {
    if (carViewCycle[0].classList.contains('moved')) {
      carViewCycle[0].classList.remove('moved')
      row.style.display = 'none'
      scaleBox.style.scale = '20'
      setTimeout(() => {
        modal.style.display = 'block'
        modalBg.style.display = 'block'
        scaleBox.style.display = 'none'
        carViewCycle[0].classList.add('moved')
      }, 500);
    } else{
      carViewCycle[0].classList.add('moved')
      row.style.display = 'flex'
      scaleBox.style.scale = '1'
      setTimeout(() => {
        modal.style.display = 'none'
        modalBg.style.display = 'none'
        scaleBox.style.display = 'flex'
        animationImg.style.display = 'block'
        carViewCycle[0].classList.remove('moved')
      }, 500);
    }
  }
})