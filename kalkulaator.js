var vastus=document.getElementById("vastus");
var kogus=document.getElementById("kogus");
var vastus=document.getElementById("vastus2");
var kogus=document.getElementById("kogus2");
var pilt=document.getElementById("pilt");
var vastus=document.getElementById("vastus3");
var kogus=document.getElementById("kogus3");
var vastus=document.getElementById("vastus4");
var kogus=document.getElementById("kogus4");

const dollar=1.16;
const sek=10.65;
const rub=84.20;
const frank=1.077;
const kilometer=1;
const meter=1;
const centimeter=1;
// перемножает

function calculate(val, currency){
    return (val* currency).toFixed(3);
    // знаки после запетой 3
}

function radioChange(event){
var inputValue=kogus.value;
    if (event.target.id == "dollar") {
        vastus.innerHTML=calculate(inputValue, dollar) + " $";
        pilt.src="img/doolar.jpg"
    }   else    if (event.target.id == "rub"){
        vastus.innerHTML=calculate(inputValue, rub) + " ₽";
        pilt.src="img/rub.jpg"
    }   else    if (event.target.id == "frank"){
        vastus.innerHTML=calculate(inputValue, frank) + " ₣";
        pilt.src="img/frank.jpg"
    }   else    if (event.target.id == "kroon"){
        vastus.innerHTML=calculate(inputValue, sek) + " SEK";
        pilt.src="img/kroon.jpg"
    }
}
function selectOptionChange(event){
    var inputValue=kogus2.value;
    if (event.target.value === "dollar") {
        vastus2.innerHTML=calculate(inputValue, dollar) + " $";
        pilt2.src="img/doolar.jpg"
    }   else    if (event.target.value === "rub"){
        vastus2.innerHTML=calculate(inputValue, rub) + " ₽";
        pilt2.src="img/rub.jpg"
    }   else    if (event.target.value === "frank"){
        vastus2.innerHTML=calculate(inputValue, frank) + " ₣";
        pilt2.src="img/frank.jpg"
    }   else    if (event.target.value === "kroon"){
        vastus2.innerHTML=calculate(inputValue, sek) + " SEK";
        pilt2.src="img/kroon.jpg"
    }
}
function validateForm() {
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
        alert("Sisesta kogus! ");
        return false;
    }
}

function inputCurrencyText(){
    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");
    if(inputText=="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + " $";

    }
}

function selectOptionChangei(event){
    var inputValue=kogus2.value;
    if (event.target.value === "kilometer") {
        vastus2.innerHTML=calculate(inputValue, kilometer) + " $";
        pilt2.src="img/doolar.jpg"
    }   else    if (event.target.value === "meter"){
        vastus2.innerHTML=calculate(inputValue, meter) + " ₽";
        pilt2.src="img/rub.jpg"
    }   else    if (event.target.value === "frank"){
        vastus2.innerHTML=calculate(inputValue, frank) + " ₣";
        pilt2.src="img/frank.jpg"
    }   else    if (event.target.value === "centimeter"){
        vastus2.innerHTML=calculate(inputValue, centimeter) + " SEK";
        pilt2.src="img/kroon.jpg"
    }
}