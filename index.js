var project = setInterval(projectDone, 10);
let counter1 = 1;
let counter2 = 1;
let counter3 = 1;
let counter4 = 1;

function projectDone() {
    counter1++;
    document.querySelector("#num2").innerHTML = counter1;
    if (counter1 == 256) {
        clearInterval(project);
    }
}
var coffe = setInterval(coffeDone, 10);
function coffeDone() {
    counter2++;
    document.querySelector("#num1").innerHTML = counter2;
    if (counter2 == 1263) {
        clearInterval(coffe);
    }
}

var mail = setInterval(mailSent, 10);
function mailSent() {
    counter3++;
    document.querySelector("#num3").innerHTML = counter3;
    if (counter3 == 1643) {
        clearInterval(mail);
    }
}

var awards = setInterval(awardsRecived, 10);
function awardsRecived() {
    counter4++;
    document.querySelector("#num4").innerHTML = counter4;
    if (counter4 == 17) {
        clearInterval(awards);
    }
}

