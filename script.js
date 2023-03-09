
const containerEl = document.querySelector('.container');

let numOfDivs = prompt('how many squares do you want to put?',10);
containerEl.style.display = 'grid';
containerEl.style.gridTemplateColumns = `repeat(${numOfDivs},50px)`;
containerEl.style.gridTemplateRows = `repeat(${numOfDivs},50px)`;

let createDivs = (num) => {

    for (let i = 0; i < num*num; i++) {
        let div = document.createElement("div");
        div.classList.add('square');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.background = '#BE68D8';
        containerEl.appendChild(div);
    };

    a = document.querySelectorAll('.square');
    for(i in a) {
        a[i].onmouseover=function(){this.setAttribute('style','background-color:blue;');}
    };

};

createDivs(numOfDivs);








