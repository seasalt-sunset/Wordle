let myColor = "red"
let parola = "zocca"
let wordInputArray = [
[input1, input2, input3, input4, input5],
[input6, input7, input8, input9, input10],
[input11, input12, input13, input14, input15],
[input16, input17, input18, input19, input20],
[input21, input22, input23, input24, input25]
];
document.addEventListener("keydown", function(event){
        if (event.key === "Backspace"){
            if(event.target.previousElementSibling && !event.target.value)
    event.target.previousElementSibling.focus();
        }
    }
);
function onInput(e) {

    if (/^[a-zA-Z]+$/.test(e.target.value)){
        if(e.target.nextElementSibling) {
            e.target.nextElementSibling.focus();
    }
    e.target.value = e.target.value.slice(-1);
} else {
    e.target.value = "";

};
}

function onSubmit(event, wordIndex) {
    event.preventDefault();
 
    let word = wordInputArray[wordIndex];
    let correct = 0
    console.log("word", word)
    for (let i = 0; i < word.length; i++) {
        if (word[i].value == parola[i]) {
            word[i].style.backgroundColor = "green"

        } else if (parola.includes(word[i].value) && word[i].value!="") {
            word[i].style.backgroundColor = "orange"
        }
        else { 
        word[i].style.backgroundColor = "gray"
            
        }word[i].disabled = true;
    }
   let nextLine = wordInputArray [wordIndex + 1];
   for (let i = 0; i < nextLine.length; i++) {
nextLine[i].disabled = false;
   }
   wordInputArray[wordIndex+1][0].focus()
}

window.onload = () => {
     wordInputArray[0][0].focus();
     fetch ("words.json")
    .then((response) => response.json())
    .then ((data) => {
    parola = data[Math.floor(Math.random() * 5)]
    console.log("p",parola)
})
}