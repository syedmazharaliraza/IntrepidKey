const empty = "";
const lcase = "abcdefghijklmnopqrstuvwxyz"

const len = 10
const lowcase = document.getElementById("lowercase");
const submit = document.getElementByClassName("button");
const pass = document.getElementById("password");

submit.addEventListener("click", () => {

    let inipass = empty;
    (lowcase.checked) ? inipass += lcase : "";

    pass.value = generatePassword(len.value, inipass)
});

function  generatePassword(l, initial) {
    let pas = "";
    for(let i = 0; i < l; i++){
        pas += initial.charAt(Math.floor(Math.random() * initial.length));
    }
    return pas;
}