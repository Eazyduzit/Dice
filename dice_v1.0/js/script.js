"use strict";

function rollDice() {
    const dice = Math.trunc(Math.random() * 6 + 1);

    if (dice === 1) {
        hideDice2();
        hideDice3();
        hideDice4();
        hideDice5();
        hideDice6();
        showDice1();
    } else if (dice === 2) {
        hideDice1();
        hideDice3();
        hideDice4();
        hideDice5();
        hideDice6();
        showDice2();
    } else if (dice === 3) {
        hideDice1();
        hideDice2();
        hideDice4();
        hideDice5();
        hideDice6();
        showDice3();
    } else if (dice === 4) {
        hideDice1();
        hideDice2();
        hideDice3();
        hideDice5();
        hideDice6();
        showDice4();
    } else if (dice === 5) {
        hideDice1();
        hideDice2();
        hideDice3();
        hideDice4();
        hideDice6();
        showDice5();
    } else if (dice === 6) {
        hideDice1();
        hideDice2();
        hideDice3();
        hideDice4();
        hideDice5();
        showDice6();
    }

    document.getElementById("rolled").innerHTML = dice;
}
rollDice();


function hideDice1() {
    document.getElementById("dice1").style.display = "none";
}
function showDice1() {
    document.getElementById("dice1").style.display = "block";
}

function hideDice2() {
    document.getElementById("dice2").style.display = "none";
}
function showDice2() {
    document.getElementById("dice2").style.display = "block";
}

function hideDice3() {
    document.getElementById("dice3").style.display = "none";
}
function showDice3() {
    document.getElementById("dice3").style.display = "block";
}

function hideDice4() {
    document.getElementById("dice4").style.display = "none";
}
function showDice4() {
    document.getElementById("dice4").style.display = "block";
}

function hideDice5() {
    document.getElementById("dice5").style.display = "none";
}
function showDice5() {
    document.getElementById("dice5").style.display = "block";
}

function hideDice6() {
    document.getElementById("dice6").style.display = "none";
}
function showDice6() {
    document.getElementById("dice6").style.display = "block";
}



