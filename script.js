let container = document.querySelector('.container');

function makeGrid() {
    let userInput = prompt('input size');
    
    container.style.gridTemplateColumns = `repeat(${userInput},1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput},1fr)`;

    function makeSquares(num) {

        for (s = 0;s < num*num; s++) {
            let div = document.createElement('div');
            div.style.backgroundColor = '#d87093';
            div.classList.add('square');
            container.appendChild(div);
        };

        a = document.querySelectorAll('.square');

        for(i in a) {
            a[i].onmouseover = function() {
                this.setAttribute('style','background-color:yellow; border-style: double; border-color:pink');
            };
        };  
    };

    makeSquares(userInput);
};

function makeRandomClr () {

    function getRandomColor() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = '#' + randomColor
    };

    a = document.querySelectorAll('.square');

    a.forEach(item => {
        item.addEventListener('mouseover',getRandomColor);
    });

}

function removeSquares() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
    makeGrid();
};

const btnNewGrid = document.getElementById('new-grid');
btnNewGrid.addEventListener('click', removeSquares);

const btnClrChange = document.getElementById('color-change');
btnClrChange.addEventListener('click',makeRandomClr);

makeGrid();

















