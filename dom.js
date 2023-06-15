const heading = document.querySelector('h1')

heading.innerText = `Dora said 
"old men plant trees whose shed they will never live to sit under"`

heading.style.color = '#f0f'

const list1 = document.querySelector('li:nth-of-type(2)')

list1.style.background = 'tomato'

const list = document.querySelectorAll('li')
list[0].innerText = 'Frontend web developement with Next JS'
list[1].innerText = 'Backend developement with Django'
list[0].style.backgroundColor = 'cyan'
list[1].style.color = 'white'

const zero = document.getElementById('no-code')
const zero1 = document.querySelectorAll('#no-code')[1]
zero1.style.backgroundColor = 'skyblue'
zero1.style.padding = '3em'
zero.style.letterSpacing = '20px'

const zeroCode = document.getElementsByClassName('no-code')
zeroCode[0].style.borderBottom = '15px dashed pink'
zeroCode[1].style.borderBottom = '10px ridge magneta'