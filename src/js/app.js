const INPUT_WEIGHT = document.getElementById("input-weight");
const INPUT_HEIGHT = document.getElementById("input-height");
const BTN_CAL      = document.getElementById("btn-cal");
const BTN_RESET    = document.getElementById("btn-reset");
const HOLDER       = document.getElementById("holder");
const BNT_D = document.getElementById("btn-detial");
const TEXT = document.getElementById("detial");

BTN_CAL.addEventListener(`click`, calculate);
BTN_RESET.addEventListener(`click`, reset);
BNT_D.addEventListener(`click`, detial);

function reset()
{
    INPUT_HEIGHT.value = null;
    INPUT_WEIGHT.value = null;
    HOLDER.innerHTML = null;

}

function calculate()
{
    const WEIGHT = parseInt( INPUT_WEIGHT.value);
    const HEIGHT = parseInt( INPUT_HEIGHT.value);


    if(WEIGHT < 18.5)
    {
        HOLDER.innerText = `your weight must be more than 18.5 kg`
    }
     if(HEIGHT < 80)
     {
        HOLDER.innerText = `your height must be more than 80 cm`
     }
    if(WEIGHT >= 18.5 && HEIGHT >= 80)
    {
       const BMI = Math.round((WEIGHT / ((HEIGHT / 100) * (HEIGHT / 100))));
       HOLDER.innerText = `your bmi is ${BMI}`;
    }
    
    const P_HOLDER = document.getElementById("p-holder")
    P_HOLDER.classList.add(`text-blue-600`);
}




