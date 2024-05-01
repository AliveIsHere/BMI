const btn = document.getElementById("btn-click");
const text = document.getElementById("text");

function bntclick(){
    text.innerHTML = `Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters. A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.`;
    text.classList.add("text-blue-600");
    
    text.classList.add("font-bold");
}

btn.addEventListener(`click`, bntclick);
