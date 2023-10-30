//ამოცანა N1
function expo(baseNum, power, cb){
    if(power === 0) return 1
    let result = baseNum * expo(baseNum, power - 1, cb)
    cb(baseNum, power, result)
    return result
}


let finalRes = expo(5,3, everyStepResult)

function everyStepResult(base, power, result) {
    console.log(`${base}^${power} = ${result}`);
}


console.log(finalRes)


//ამოცანა N2

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        console.log('resolved', res)
        return res.json()
    })
    .then(data => {
        console.log(data)
        let jsonDiv = document.createElement('div')
        jsonDiv.innerHTML = JSON.stringify(data)
        document.body.appendChild(jsonDiv)
    })
    .catch((err) => console.log('err', err))



//ამოცანა N3   

let incorrectDataType = 5
let validObj = {
    name: 'Nino',
    address: {
        city: 'Tbilisi',
        country: 'Georgia'
    },
    interests: {
        gaming: ['Halo', 'Cuphead', "Stardew Valley"],
        foreignLanguages: ['English', 'Russian', 'French', "German"]
    }
}

 async function checkObject(obj){
    if(typeof obj === "object"){
        if(Array.isArray(obj)){
            return 'This is not an object'
        }else return obj
    }else{
        return 'Incorrect data type'
    }
 }

 async function promisify(){
    try{
        const response = await checkObject(validObj)
        let result = deepClone(response)
        console.log(result)
    }catch(error){
        console.log(error)
    }
 }


 function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // Return non-objects as is
    }
  
    if (Array.isArray(obj)) {
      // If it's an array, create a new array and deep clone its elements
      const cloneArray = [];
      for (let i = 0; i < obj.length; i++) {
        cloneArray[i] = deepClone(obj[i]);
      }
      return cloneArray;
    }
  
    // If it's an object, create a new object and deep clone its properties
    const cloneObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneObj[key] = deepClone(obj[key]);
      }
    }
  
    return cloneObj;
  }

promisify()