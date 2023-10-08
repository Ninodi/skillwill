//ამოცანა N1
user = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28},
]

function findYoungest(user){
    let youngest = user[0]
    for(singleUser of user){
        if(singleUser.age < youngest.age){
            youngest = singleUser
        }
    }

    return youngest.name
}

console.log(findYoungest(user))


//ამოცანა N2

//2.1 პირველი ვარიანტი როდესაც ახალ მასივში ობიექტები გადადის რეფერენსის გარეშე
let newArray1 = []

function getNewArray(user){
    for(item of user){
        newArray1.push({
            name: item.name,
            age: item.age
        })
    }
}

getNewArray(user)
console.log(newArray1)

//2.2 მეორე ვარიანტი როდესაც ახალ მასივში ობიექტები გადადის რეფერენსით
let newArray2 = user.map(item => item)
console.log(newArray2)


//ამოცანა N3
function diceGame(){
    let a = singlePlayerMove()
    let b = singlePlayerMove()

    console.log('Attempt count for a is ' + a)
    console.log('Attempt count for b is ' + b)

    if(a > b){
        return 'Winner is b'
    }else if(b > a){
        return 'Winner is a'
    }else return 'Its a draw'
}

function singlePlayerMove(){
    let numOfTries = 0
    while(true){
        let randomNum = getRandomNum()
        numOfTries++
        if(randomNum === 3){
            return numOfTries
        }
    }
}

function getRandomNum(){
    return Math.floor(Math.random() * 7);
}

let winner = diceGame()

console.log(winner)