const studentData = [
    {
        name: "Ramu",
        marks: 60

    },
    {
        name: "Tim",
        marks: 79

    },
    {
        name: "Tedros",
        marks: 90

    }
]

// First Method 
let sum = 0

studentData.forEach(function(i){
 sum = (sum+i.marks)
 
})

console.log(sum)  

// Second Method

const output = studentData.map(function(i){
     return(i.marks)
})
console.log(output)

let result = output.reduce(function(i,j){
    return i+j
})

console.log(result)