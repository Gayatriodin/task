// DOM

// const myBtn = document.querySelector("button")

// myBtn.addEventListener("click" , function(){
//     for(i=0; i<=500;i++){
//     const myImg = document.createElement("img")

//     myImg.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)

//     myBtn.append (myImg)
//     console.log(myImg)
// }
// })

// const myBtn = document.querySelector("button")

// myBtn.addEventListener("click" , function(){
//     for(i=0; i<=500;i++){
//     const myImg = document.createElement("img")

//     myImg.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)

//     myBtn.append (myImg)
//     console.log(myImg)
// }
// })


// New Task

// Q1. i need your help to complete one task the question is generate a random number between 1 to 20 and 
// fulfill the promise the number is less than 10 and reject the  promise is greater than 10



function generateRandomNumber() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
      console.log("Generated number:", randomNumber); // Optional: Log the generated number
      
      if (randomNumber < 10) {
        resolve(randomNumber); // Fulfill the promise if the number is less than 10
      } else {
        reject("Number is greater than or equal to 10"); // Reject the promise if the number is greater than or equal to 10
      }
    });
  }


  generateRandomNumber()
  .then((result) => {
    console.log("Promise fulfilled with result:", result);
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error);
  });