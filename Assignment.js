/* Problem 1 
(Conversion: Seer To Mon
--------------------------- */

function seerToMon(seer) {
   if(typeof seer != 'number'){
       return 'Undefined. Please put a Number!'
   }
   if(seer < 0){
       return ' Please put a positive Number!'
   }
        let mon = seer / 40;
        return mon; 
}

const applyOne = seerToMon(120);
console.log(applyOne);




/* Problem 2 
TOTAL SALES
------------- */

function totalSales(shirts , pants , shoes) {

    if(typeof shirts != 'number' && typeof pants != 'number' && typeof shoes != 'number' || (shirts < 0 || pants < 0 || shoes < 0)){
        return 'Undefined. Please put your input as Number! And make sure its a positive number.'
    }
    
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    let totalShirtPrice = shirts * 100;
    let totalPantPrice = pants * 200;
    let totalShoePrice = shoes * 500;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalPrice;
}

let applytwo = totalSales(10, 10, 0);
console.log(applytwo);



/* Problem 3:
delivery Cost of T-shirts.
--------------------------- */

function deliveryCost(tshirts) {
    
    if(typeof tshirts != 'number'){
        return 'Undefined. Please put a Number!'
    }
    if(tshirts < 0){
        return ' Please put a positive Number!'
    }

// main calculation

    if(tshirts <= 100){
        const deliveryCharges = tshirts * 100;
        return deliveryCharges;
    }
    else if(tshirts > 100 && tshirts <=200){
        const firstHundredTshirtPrice = 10000;
        const moreThanHundred = tshirts - 100;
        const deliveryCharges = (moreThanHundred * 80) + firstHundredtshirtPrice; 
        return deliveryCharges; 
    }
    else{
        const firstHundredtshirtPrice = 10000;
        const secondHundredTshirtPrice = 8000;
        const moreThanTwoHundred = tshirts - 200;
        const deliveryCharges = (moreThanTwoHundred * 50) + (firstHundredtshirtPrice + secondHundredTshirtPrice);
        return deliveryCharges;
    }

}

let applyThree = deliveryCost(220);
console.log(applyThree);



/* Problem 4:
return string of Friend Name 
----------------------------- */

function perfectFriend(friends) {
    if(typeof friends != 'object'){
        return 'Please input an Array!'
    }
    
    for(let i = 0; i < friends.length; i++){
        let FriendName = friends[i];

        if(friends[i].length == 5){
            return FriendName;
        }
    }
}

let bondhus = ['sabbir', 'ashraful', 'sakib', 'Mohibul', 'eftekhar', 'sihab', 'istiak'];
let applyFour = perfectFriend(bondhus);
console.log(applyFour);