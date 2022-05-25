console.log("Merhaba Kodlama.io")

let dolarDun = 9.40
let dolarBugun = 9.30
//dolarDun = "Ankara" // Works

{
    let dolarDun = 9.10 // Doesn't work
}

console.log(dolarDun)

//const
const euroDun = 11.2
//euroDun = 11 // Wrong

console.log(euroDun)

//Array
let konutKredileri = [12,"Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")

for(let i=0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")

//console.log(konutKredileri)

