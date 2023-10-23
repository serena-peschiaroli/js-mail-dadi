/* dati: numero array da 1-6; numero random generato per cpu; numero random generato per giocatore; 
vince chi fa il numero più alto*/

const betNumber= [1 , 2 , 3 , 4 , 5 , 6];

function GetBetNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const CpuBet = GetBetNumber (1, 6);
console.log (" Cpu Bet" , CpuBet);

const UserBet= GetBetNumber ( 1, 6);
console.log( " User Bet " , UserBet);

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
}else if (UserWin === true && CpuWin === true || UserWin === false && CpuWin === false) {
    console.log("Pareggio");
}else if (UserWin === false && CpuWin === true){
    console.log("Ha vinto il computer");
}
