console.log("test");


function roundNumber() {
    const inputNumber = (document.querySelector("#inputNumber") as HTMLInputElement).value;
    const output = document.querySelector(".output") as HTMLParagraphElement;
    const zahlNeu = parseFloat(inputNumber);
    let ergebnis = Math.round(zahlNeu * 100) / 100;

    output.innerHTML = `Die gerundete Zahl ist: ${ergebnis}`;
    console.log(ergebnis);
}

const button = document.querySelector("button") as HTMLButtonElement;
button.onclick = roundNumber;

