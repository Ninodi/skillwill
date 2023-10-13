//ამოცანა N1
function replaceChar(string, valueToReplace, valueToReplaceWith){
    //ეს იმ შემთხვევაში თუ სხვა data type ების დაშვება არ გვინდა
    if(![string, valueToReplace, valueToReplaceWith].every(eachVar => typeof eachVar === "string")){
        console.log("Not a valid data type")
        return
    }


    let modifiedString = string
        .split('')
        .map(char => char === valueToReplace ? char = valueToReplaceWith : char = char)
        .join('')

    console.log(modifiedString)
}

replaceChar("Hello Friends", "H", "u")


//ამოცანა N2

//2.1 თუ წინადადებაში სიტყვების მხოლოდ პირველი ასოს გადაკეთება გვინდა
 function firstCharToUpperCase(string){
    if(typeof string !== 'string') return

    let modifiedString = string
        .split(' ')
        .map(word => {
            let firstLetter = word[0].toUpperCase()
            let restOfTheWord = word.slice(1)
            return firstLetter + restOfTheWord
        })
        .join(' ')


    console.log(modifiedString)
 }

 firstCharToUpperCase("this is a solution for problem 2.1")


 //2.2 თუ წინადადებაში სიტყვების ყველა ასოს გადაკეთება გვინდა

 function allToUppercase(string){
    let uppercase = string.toUpperCase()

    console.log(uppercase)
 }

 allToUppercase("this is a solution of problem 2.2")


 //ამოცანა N3

 let users = [
    {
        name: 'Saba',
        age: 20
    },
    {
        name: 'Lizi',
        age: 16
    },
    {
        name: 'Lasha', 
        age: 30
    }
]


function sortByAge(array){
    array.sort((a, b) => a.age - b.age);
    
    console.log(array)
}

sortByAge(users)

    