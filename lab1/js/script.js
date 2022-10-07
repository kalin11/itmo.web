let form = document.querySelector(".js-form"),
    formInputs = document.querySelector(".js-input");

form.onsubmit = function () {
    let y = formInputs.value;
    let parsed = parseFloat(y.replace(',', '.'));
    console.log(parsed);
    if (!isNaN(parsed)){
        if (parsed < -5 || parsed > 3){
            formInputs.style.background = "#FE6262";
            return false;
        }
        else {
            return true;
        }
    }
    else {
        formInputs.style.background = "#FE6262";
        return false;
    }
}