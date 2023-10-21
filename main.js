//ამოცანა N1

const modalBtn = document.getElementById('modal-btn')
const modalContainer = document.querySelector('.modal-container')
const modalBack = document.querySelector('.modal-back')

modalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})

modalBack.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})


//ამოცანა N2

const colors = ['red', 'blue', 'green', 'black', 'white']

const colorInput = document.getElementById('color-input')
const colorBtn = document.getElementById('color-btn')


colorBtn.addEventListener('click', () => {
    let inputValue = colorInput.value

    if(inputValue === '') alert('Please choose a color')
  
    if(!colors.includes(inputValue)){
        alert('Color not found')
    }else document.body.style.backgroundColor = inputValue

})


//ამოცანა N3
const numInput = document.getElementById('num-input')
const numMeanBtn = document.getElementById('num-mean-btn')
const result = document.getElementById('result')

numMeanBtn.addEventListener('click', () => {
    let inputValue = numInput.value
    numInput.value = ''
    let nums = inputValue.split(':')
    let sum = nums.reduce((a,b) => parseInt(a) + parseInt(b))
    let mean = sum / nums.length

    result.innerText = `Mean is ${mean}`
})
