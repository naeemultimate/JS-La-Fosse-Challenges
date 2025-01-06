/* For the below harder challenges, you will need to copy the challenges to an external code editor, like  Programiz, https://www.programiz.com/javascript/online-compiler, and recopy the code back into this file.

/* 

   Harder Challenge 1: Raffle Winners
-----------------------------------

*/ 

// La Fosse Academy is hosting a raffle at their summer sports day. Write a function which will select the winners based on two factors: their raffle ticket number, and their seat number. If both of these numbers are odd, the associate wins a raffle prize! 

// The raffleWinners function will be passed an array of numbers representing the raffle ticket numbers. The index position of the array represents the seat number. 

// Your task is to return an array of objects. Each object should contain two keys. The first key is "seat" with a value of the odd index. The second key is the "raffleTicket" with a value of the ticket price at that index in the input array. 

// Write your function here

function raffleWinners(array){
    let emptyArr = []; //initialising empty array
    let win = {};
    for (let i=0; i < array.length; i++){
      if( i % 2 !== 0 && array[i] % 2 !== 0){//if both ODD seat (index of array) & ticket (value)
         let win = {seat: i , raffleTicket: array[i]};
         emptyArr.push(win);
      } 
    }
    return emptyArr;
   }
    //Examples below 
    console.log(raffleWinners([2, 15, 7, 21 ]))
    // return [{seat: 1, raffleTicket: 15}, {seat:3, raffleTicket: 21}]
    
    console.log(raffleWinners([5, 39, 16, 27, 4, 11 ]))
    // return [{seat: 1, raffleTicket: 39}, {seat:3, raffleTicket: 27}, {seat: 5, raffleTicket: 11}]
    
    console.log(raffleWinners([9, 4, 13, 22, 37, 26 ]))
    // return []
    
    
    /* 
    
       Harder Challenge 2: Ordering Food
    -----------------------------------
    
    */ 
    // La Fosse Academy is hosting a party and will be ordering food. The orderFood function takes two arguments: a food object with keys of food items and values of the cost of that item, and the number of guests attending. 
    
    // It should return a number showing the total cost of ordering one of each item per guest! 
    
    function orderFood(food, guests){
      let totalCost = 0;
      for (let item in food){
         totalCost = totalCost + food[item];
      }
      let overallTotal = totalCost * guests; //Multiplying by guest number
      return overallTotal;
    }
    
    
    console.log(orderFood({ brownies: 2, cupCakes: 7}, 3))
    // Should return 27
    
    console.log(orderFood({ crispPackets: 8, apples: 4, iceCream: 3, chocolateBars: 10}, 20))
    // Should return 500
    
    
    module.exports = {
        raffleWinners,
        orderFood
    }
    