function goodAfternoon(){
    console.log("How are you doing today")
}
goodAfternoon()

function sum(a,b){
    console.log(a+b)
}
sum(5,10)

function calculateandreturnArea(width, height){
let area=(width*height)
return area
}
let area= calculateandreturnArea(6,9)
console.log(area)

    let items=[
    {item:"Shirt", price: 15, quantity:3},
    {item:"Shoe", price:120, quantity:1}
]

function calculatetheTotalCost(){
    let totalCost=0
    for (let i=0; i<items.length; i++){
        totalitems+= totalCost[i].price * totalCost[i].quantity
    }
        return totalCost
    
}
let result=calculatetheTotalCost()
console.log(result)