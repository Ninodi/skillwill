//ამოცანა N1
function compareValues(a, b){
    if(a === b) console.log('ტოლია')
    else console.log('არ არის ტოლი')
}


compareValues(5, "5")


//ამოცანა N2
function convertToCelsius(fahrenheit){
    if(typeof fahrenheit !== "number") return false

    return (fahrenheit - 32) * (5/9)
}


console.log(convertToCelsius(50))


//ამოცანა N3
function calculations(a, b, operation){
    if(typeof a !== "number" || typeof b !== "number") return false

    if(operation === "+"){
        return a + b
    }else if(operation === "-"){
        return a - b
    }else if(operation === '*'){
        return a * b
    }else if(operation === "/"){
        return a / b
    }else return false
}

console.log(calculations("5",3,"*"))