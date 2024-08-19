let inputIcon = document.getElementById("temperatureInput")
let topicElement = document.getElementById("topicElement")
let resultIcon = document.getElementById("result")

function changeForm() {
    resultIcon.innerHTML = ""
    inputIcon.value = ""

    if (inputIcon.placeholder === "°C"){
        inputIcon.placeholder = "°F" ;
        document.title = "Temp Converter | °F To °C";
        topicElement.innerHTML = "Convert °F To °C"
    }else{
         inputIcon.placeholder = "°C";
         document.title = "Temp Converter | °C To °F";
          topicElement.innerHTML = "Convert °C To °F"
}}

function convertForm(){
    if (inputIcon.placeholder === "°C"){
        resultIcon.innerHTML =inputIcon.value + " °C is " + ((inputIcon.value * 9/5) + 32) + " °F";
    }else {
        resultIcon.innerHTML =inputIcon.value + " °F is " + ((inputIcon.value - 32) * 5/9) + " °C";
    }
}

function resetForm() {
    resultIcon.innerHTML = ""
    inputIcon.value = ""
}