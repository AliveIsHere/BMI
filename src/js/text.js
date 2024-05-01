const btn = document.getElementById("btn-click");
const text = document.getElementById("text");

function bntclick(){
    text.innerHTML = 'hello world';
}

btn.addEventListener(`click`, bntclick);
