var no = prompt("Enter a number which is less than or greater than 5");
let myPromise = new Promise((resolve, reject) => {
    if(no >= 5){
        resolve("No is greater than 5");
    }
    else{
        reject("No is less than 5");
    }
})
myPromise.then((value) => {
    console.log(value);
})
myPromise.catch((error) => {
    console.log(error);
})