console.log("test");

const zahlPC = Math.random() * 10;
const zahlPCNum = Math.floor(zahlPC);

const zahlUser = window.prompt("Geben Sie eine Zahl ein:");

const zahlUserNum = Math.floor(parseFloat(zahlUser));

if (!isNaN(zahlUserNum)) {
    console.log(`Zahl des Benutzers: ${zahlUserNum}`);
    console.log(`Zahl des Computers: ${zahlPCNum}`);
} else
    console.log("Geben Sie eine gültige Zahl ein !!");

switch (true) {
    case zahlUserNum == zahlPCNum:
        console.log("Glück gehabt");
        break;
    default:
        console.log("Sie hatten leider kein Glück");
        break;
}

