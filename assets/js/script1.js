
const firstDiv = document.querySelector('#first-div')            
const secondDiv = document.querySelector('#second-div')
const thirdDiv = document.querySelector('#third-div') 
const fourthDiv = document.querySelector('#fourth-div') 
const divKey = document.querySelector('#key')

const colorChange = (element) => {
    element.target.style.backgroundColor = 'black';
};

firstDiv.addEventListener('click', colorChange);
secondDiv.addEventListener('click', colorChange);
thirdDiv.addEventListener('click', colorChange);
fourthDiv.addEventListener('click', colorChange);


function createNewDiv(color) {
    let newDiv = document.createElement('div');
    newDiv.style.width = '200px'
    newDiv.style.height = '200px'
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        divKey.style.backgroundColor = 'purple'
    } else if (event.key === 's') {
        divKey.style.backgroundColor = 'grey'
    } else if (event.key === 'd') {
        divKey.style.backgroundColor = 'pink'
    } else if (event.key === 'q') {
        createNewDiv('lightBlue')
    } else if (event.key === 'w') {
        createNewDiv('orange')
    } else if (event.key === 'e') {
        createNewDiv('brown')
    } 
})