//THEN/CATCH გამოყენებით

function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Is ready')
        }, delay)
    })
}


function makeToy() {
    return mySetTimeout(3000).then(() => {
      console.log("Toy is ready");
    });
  }

  function checkQuality(){
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.1) {
            resolve("undefected");
          } else {
            reject("defected");
          }
    })
  }
  
  function deliverToys(status) {
    if(status === 'undefected'){
        return mySetTimeout(2000).then(() => {
            console.log("Toys have been delivered");
          });
    } else {
        reject("toys wont be delivered")
    }
  }
  
  function sellToy() {
    return mySetTimeout(1000).then(() => {
      console.log("Toy has been sold");
    });
  }
  
  makeToy()
    .then(() => checkQuality())
    .then((status) => deliverToys(status))
    .then(() => sellToy())
    .then(() => {
      console.log("All steps completed successfully!");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  



//ASYNC/AWAIT გამოყენებით

// async function mySetTimeout(delay){
//   setTimeout(() => {
//     return 'Is ready'
//   }, delay)
// }

// async function makeToy(){
//   await mySetTimeout(3000);
//   console.log("Toy is ready");
// }


// async function checkQuality(){
//   if (Math.random() > 0.1) {
//     return 'undefected'
//   } else {
//     return 'defected'
//   }
// }


// async function deliverToys(status){
//   if(status === 'undefected'){
//     await mySetTimeout(2000);
//     console.log("Toys have been delivered");
//   }else{
//      return "toys wont be delivered"
//   }
// }

// async function sellToy(){
//   mySetTimeout(1000)
//   console.log("Toy has been sold");
// }


// async function allSteps(){
//   try {
//     await makeToy();
//     const status = await checkQuality();
//     await deliverToys(status);
//     await sellToy();
//     console.log("All steps completed successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// allSteps()