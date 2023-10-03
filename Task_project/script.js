const myBtn = document.querySelector("#btn");
const form = document.getElementsByClassName("container")[0];
const heading = document.querySelector(".greeting");
const myTries = document.getElementsByClassName("score")[0];
// const myInputBar = document.querySelector("#text")
const randomNum = Math.floor(Math.random()*10+1);
console.log(randomNum)

var count = 0;

myBtn.addEventListener("click",function(e){
    e.preventDefault();
    
    // console.log(myInputBar.value)

    const myInputBar = document.querySelector("#text").value ;

    if(randomNum > myInputBar){
         
        heading.innerText = "Try bigger number 😒"
        form.style.borderColor = "red" 
        count++;
        myTries.innerText = count;
    }
    else if(randomNum == myInputBar){
        heading.innerText = "Congrates 🎉"
        form.style.borderColor = "green" 
        myTries.innerText = count;
    }
    else{
        count++;
        heading.innerText = "Try smaller number 😑"
        form.style.borderColor = "red" 
        myTries.innerText = count;
    }
     form.reset()
})