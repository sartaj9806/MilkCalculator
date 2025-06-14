let full = document.querySelector(".full-cream input");
const cow = document.querySelector(".cow-milk input");
let bacha = document.querySelector(".bachha input");
let dahi = document.querySelector(".dahi input");
let dahi35 = document.querySelector(".dahi35 input");
let chach = document.querySelector(".chach input");
let bread10 = document.querySelector(".bread10 input");
let bread20 = document.querySelector(".bread20 input");
let mango10 = document.querySelector(".mango10 input");

const itemsName = document.querySelectorAll(".item-name .flex");
const itemList = document.querySelector(".item-list")
let textArea = document.querySelector('.textarea');
let close = document.querySelector('.close-btn');
let text = ""

function showText() {
    text = ""
    itemsName.forEach(element => {
        const inputValue = element.querySelector(".text-fields").value;
        const itemName = element.querySelector("h4").textContent;
        if (inputValue > 0) {
            text = text + `${inputValue} ${itemName}\n`;
        }
    })
    textArea.value = text;
}

function selectText() {
    textArea.select();
    document.execCommand("copy");
}

function sendMessage() {
    const encodedMsg = text.replace(/\n/g, '%0A');
    const win = window.open(`https://wa.me/?text=${encodedMsg}`, '_blank');
}

close.addEventListener('click', () => {
    itemList.style.display = "none";

})

function calculate() {
    const fullP = full.value * 34.5 * 2;
    const cowP = cow.value * 29.5 * 2;
    const bachaP = bacha.value * 9;
    const dahiP = dahi.value * 19;
    const dahi35P = dahi35.value * 34;
    const chachP = chach.value * 9.5;
    const bread10P = bread10.value * 9;
    const bread20P = bread20.value * 18;
    const mango10P = mango10.value * 9;

    let total = fullP + cowP + bachaP + dahiP + dahi35P + chachP + bread10P + bread20P + mango10P;

    document.querySelector(".display").innerHTML = `Rs ${total}`;
    itemList.style.display = "flex";

    // addingText()
    showText()
}