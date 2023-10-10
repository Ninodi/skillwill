//ამოცანა N1
function calcArguments(arg1, arg2, ...args){
    let result = []

    if(arguments.length < 2) return

    result.push(arg1+arg2)
    let multipliedArgs = args.reduce((a, b) => a * b, 1)
    result.push(multipliedArgs)

    return result
    
}

console.log(calcArguments(3,6,2,2,2))

//ამოცანა N2
let user = {
    banks: [
        {
            address:{
                city: 'tbilisi'
            }
        },
        {
            address:{
                city: 'gori'
            }
        },
        {
            address:{
                cityName: 'kutaisi'
            }
        },
    ]
}



function getCityField(user){
    const { banks: [, , { address: { city } = {}}] } = user;
    return city
}

console.log(getCityField(user))

