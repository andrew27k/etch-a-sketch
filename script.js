const body = document.querySelector('body');
const divContainer = document.createElement('div')
divContainer.setAttribute("class", "container");
body.appendChild(divContainer);

const getContainer = document.querySelectorAll('.container');

const input = document.querySelector('input')
const label = document.querySelector('label')
const toggleGridRaster = document.getElementById('toggleRaster');
const resetBtn = document.getElementById('resetBtn');
const DEFAULT_SIZE = 16;

input.addEventListener('input', () => {
    label.innerHTML = `${input.value} x ${input.value}`;
})

input.addEventListener('change', () => {
    createGrid(input.value);
    resetGrid();
});


    
toggleGridRaster.addEventListener('click', () => {

    let childElement = document.querySelectorAll('.child');

    childElement.forEach(element => {
        element.classList.toggle('toggleGridRaster');
    })
    
})





getContainer.forEach(div => {
    div.addEventListener('mouseover', addClass)
})

function addClass(e) {
    if (e.target.id == 'child') {
        e.target.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
    }
    return false;
}

const createDivChild = (size) => {
    const divChild = document.createElement('div');
    divChild.setAttribute("class", "child");
    divChild.setAttribute('id', 'child');
    divChild.style.width = `${size}px`;
    divChild.style.height = `${size}px`;

    return divChild;
}

const createGrid = (gridSize) => {
    for (let width = 0; width < gridSize; width++){
        for(let height =0; height < gridSize; height++){
            divContainer.appendChild(createDivChild(divContainer.clientWidth / gridSize))
        }
    }
}

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255)
    return r;
}


const resetGrid = () => {
    while (divContainer.firstChild){
        divContainer.removeChild(divContainer.lastChild);
    }
    createGrid(input.value)
}

resetBtn.addEventListener('click', () => {
    resetGrid();
})

window.onload = createGrid(DEFAULT_SIZE);


