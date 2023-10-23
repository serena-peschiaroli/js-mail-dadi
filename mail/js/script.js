/* Dati: indirizzi e-mail (array); indirizzo email user;
logica: array di indirizzi e-mail; SE indirizzo user == indirizzi mail array, allora --> puoi accedere
altrimenti --> non poi accedere*/

const insideMail= ["admin@company.com" , "manager@company.com" , "user001@company.com" , "user002@company.com" , "user003@company.com"]; 

let UserMail = prompt("Ciao, inserisci il tuo indirizzo e-mail");
console.log(UserMail);

let granted= false;

for (let i = 0; i< insideMail.length; i++){
    const insMail = insideMail[i];
    if (insMail === UserMail) {
        granted = true;
    }
    console.log(insMail , UserMail , granted);
}

if (granted === true) {
    console.log("Puoi accedere");
}else{
    console.log("Accesso non consentito");
}