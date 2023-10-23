/* dati: numero array da 1-6; numero random generato per cpu; numero random generato per giocatore; 
vince chi fa il numero più alto*/

const betNumber= [1 , 2 , 3 , 4 , 5 , 6];
// array
// constanti per bottoni
const BetSubmit = document.querySelector(".BetSubmit");
const GameReset = document.querySelector(".GameReset");

function GetBetNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// VERSIONE CON FUNZIONE, BOTTONE INIZIA E BOTTONE RESET

// click , funzione "Betstart" che al click (add event listener) fa partire l'estrazione di numero utente, numero cpu
function BetStart ( ) {

    const CpuBet = GetBetNumber (1, 6);
    console.log (" Cpu Bet" , CpuBet);
    document.getElementById("CpuBet").innerHTML = `il computer estrae ${CpuBet}`;



    const UserBet= GetBetNumber ( 1, 6);
    console.log( " User Bet " , UserBet);
    document.getElementById("UserBet").innerHTML = `Tu hai estratto ${UserBet}`

    let UserWin = false;
    let CpuWin = false;

    for (let i = 0; i < betNumber.length; i++) {
    const WinBet = betNumber[i];

        if (UserBet > CpuBet) {
        UserWin = true;
        CpuWin = false;

        
        
        }else if (UserBet < CpuBet) {
        CpuWin = true; 
        UserWin = false;
        

        } else if (UserBet === CpuBet) {

    }
    console.log (UserBet , CpuBet , WinBet, )
    }

    if (UserWin === true && CpuWin === false) {
    console.log("Hai vinto");
    document.getElementById("Whowin").innerHTML = (`hai vinto!`)
    }else if (UserWin === true && CpuWin === true ) {
    console.log("Pareggio");
    document.getElementById("Whowin").innerHTML = (`Pareggio!`)
    }else if (UserWin === false && CpuWin === true){
    console.log("Ha vinto il computer");
    document.getElementById("Whowin").innerHTML = (`hai perso!`)
    }else {
    console.log ("Avete perso")
    document.getElementById("Whowin").innerHTML = (`Non ha vinto nessuno, ritenta!`)
    }


}

BetSubmit.addEventListener ("click" , BetStart);
// prima si dichiara la funzione, poi si richiama collegata all'addEventListener

// bottone GameReset


GameReset.addEventListener("click", function () {
    const resetParags = document.querySelectorAll(".RisultatiP p");

    for (const resetParag of resetParags) {
        // NodeList (vedi documentazione ufficiale) che contiene tutti gli elementi p con la classe "risultatiP". questa sintassi dichiara una variabile costante che prenderà il valore di ogni elemento nella Nodelist in "resetParags"
        resetParag.textContent ="";

        // la Nodelist è una collezione di nodi (i nodi possono essere elementi, attributi, testo etc) dati dal DOM, esempio: querySelectorAll. E' simile ad un array perchè è iterabile ma non funzione come un array
        // iterabile = definire o personalizzare il comportamento di iterazione, esempio valori ripetuti in un loop
    }

});



// VERSIONE SENZA BOTTONI E INSERIMENTO TESTO IN <P>


// const CpuBet = GetBetNumber (1, 6);
// console.log (" Cpu Bet" , CpuBet);
// document.getElementById("CpuBet").innerHTML = `il computer estrae ${CpuBet}`;



// const UserBet= GetBetNumber ( 1, 6);
// console.log( " User Bet " , UserBet);
// document.getElementById("UserBet").innerHTML = `Tu hai estratto ${UserBet}`

// let UserWin = false;
// let CpuWin = false;

// for (let i = 0; i < betNumber.length; i++) {
//     const WinBet = betNumber[i];

//     if (UserBet > CpuBet) {
//         UserWin = true;
//         CpuWin = false;

        
        
//     }else if (UserBet < CpuBet) {
//         CpuWin = true; 
//         UserWin = false;
        

//     } else if (UserBet === CpuBet) {

//     }
//     console.log (UserBet , CpuBet , WinBet, )
// }

// if (UserWin === true && CpuWin === false) {
//     console.log("Hai vinto");
//     document.getElementById("Whowin").innerHTML = (`hai vinto!`)
// }else if (UserWin === true && CpuWin === true ) {
//     console.log("Pareggio");
//     document.getElementById("Whowin").innerHTML = (`Pareggio!`)
// }else if (UserWin === false && CpuWin === true){
//     console.log("Ha vinto il computer");
//     document.getElementById("Whowin").innerHTML = (`hai perso!`)
// }else {
//     console.log ("Avete perso")
//     document.getElementById("Whowin").innerHTML = (`Non ha vinto nessuno, ritenta!`)
// }


// PRIMA VERSIONE DI PROVA, NO TESTO, SOLO CONSOLE.LOG
// const betNumber = [1, 2, 3, 4, 5, 6];

// function GetBetNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const CpuBet = GetBetNumber(1, 6);
// console.log("Cpu Bet:", CpuBet);

// const UserBet = GetBetNumber(1, 6);
// console.log("User Bet:", UserBet);

// let UserWin = false;
// let CpuWin = false;

// for (let i = 0; i < betNumber.length; i++) {
//     const WinBet = betNumber[i];

//     if (UserBet > CpuBet) {
//         UserWin = true;
//         CpuWin = false;
//     } else if (UserBet < CpuBet) {
//         CpuWin = true;
//         UserWin = false;
//     } else {
       
//     }

//     console.log("User Bet:", UserBet);
//     console.log("Cpu Bet:", CpuBet);

//     if (UserWin) {
//         console.log("Hai vinto!");
//     } else if (UserWin === CpuWin) {
//         console.log("Pareggio");
//     } else {
//         console.log("Ha vinto il computer");
//     }
// }
