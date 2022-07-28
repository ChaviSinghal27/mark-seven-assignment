const textInput = document.querySelector("#input");
const translationBtn = document.querySelector("#translation-btn");
const outputEl = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/yoda.json"

translationBtn.addEventListener("click", clickHandler);

function getTranslationURL(text) {
  return  serverURL + "?" + "text=" + text
}

function errorHandler() {
    console.log("error occurred", error);
    alert("something wrong with server: try again sometime")
}

function clickHandler() {
    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputEl.innerText = translatedText;
    })
    .catch(errorHandler)
}

