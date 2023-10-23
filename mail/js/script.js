/* Dati: indirizzi e-mail (array); indirizzo email user;
logica: array di indirizzi e-mail; SE indirizzo user == indirizzi mail array, allora --> puoi accedere
altrimenti --> non poi accedere*/


// VERSIONE CON BOTTONE E ADEVENTLISTENER

const insideMail= ["admin@company.com" , "manager@company.com" , "user001@company.com" , "user002@company.com" , "user003@company.com"];
const MailSubmit = document.querySelector(".MailSubmit");
const MailReset = document.querySelector(".ResetMail");

let UserMail = document.getElementById("submitMail");
console.log(UserMail);

let granted= false;

function GetMail () {
    for (let i = 0; i< insideMail.length; i++){
        const insMail = insideMail[i];
        if (insMail === UserMail.value) {
            granted = true;
        }
        console.log(insMail , UserMail.value , granted);
    }
    
    if (granted === true) {
        console.log("Puoi accedere");
        document.getElementById("CanIgetIn").innerHTML = `Benvenuto, ${UserMail.value}`
    }else{
        console.log("Accesso non consentito");
        document.getElementById("CanIgetIn").innerHTML = ` Spiacente, ${UserMail.value} non è una mail riconosciuta, contatta l'admin`;
    }

}

MailSubmit.addEventListener("click" , GetMail);

MailReset.addEventListener("click" , function() {
    const resetAlls = document.querySelectorAll (".access p");
    for (const resetAll of resetAlls) {
        resetAll.textContent = "";
    }
})





// VERSIONE SENZA ADDEVENTLISTENER

// const insideMail= ["admin@company.com" , "manager@company.com" , "user001@company.com" , "user002@company.com" , "user003@company.com"]; 

// let UserMail = prompt("Ciao, inserisci il tuo indirizzo e-mail");
// console.log(UserMail);

// let granted= false;

// for (let i = 0; i< insideMail.length; i++){
//     const insMail = insideMail[i];
//     if (insMail === UserMail) {
//         granted = true;
//     }
//     console.log(insMail , UserMail , granted);
// }

// if (granted === true) {
//     console.log("Puoi accedere");
// }else{
//     console.log("Accesso non consentito");
// }