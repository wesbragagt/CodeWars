function tickets(peopleInLine) {
    // my change
    const changeAvailable = {
        a25: 0,
        a50: 0,
        a100: 0
    }
    for(let i = 0; i < peopleInLine.length; i++){
        if(peopleInLine[i] === 25){
            changeAvailable.a25 += 1
        }

        if(peopleInLine[i] === 50){
            changeAvailable.a50 += 1;
            changeAvailable.a25 -= 1;
        }

        if(peopleInLine[i] === 100){
            if(changeAvailable.a25 >= 3){
                changeAvailable.a100 += 1;
                changeAvailable.a25 -= 3;
            }
            if(changeAvailable.a50 > 1){
                changeAvailable.a100 += 1;
                changeAvailable.a50 -= 1;
            }
        }
    }
    if(changeAvailable.a25 < 0 || changeAvailable.a50 < 0){
        return 'NO';
     }
   
   return 'YES';
}

console.log(tickets([25, 50, 100]));

module.exports = tickets;
