// DOM

const myBtn = document.querySelector("button")

myBtn.addEventListener("click" , function(){
    for(i=0; i<=500;i++){
    const myImg = document.createElement("img")

    myImg.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)

    myBtn.append (myImg)
    console.log(myImg)
}
})