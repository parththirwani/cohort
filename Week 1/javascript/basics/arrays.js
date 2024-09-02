const initialArray=[1,2,3];
const secondArray=[4,5,6]
const concatenatedArray= initialArray.concat(secondArray) //to concatenate two arrays
initialArray.push(2);   //to add number at the end
initialArray.pop()      //to remove number from right
initialArray.shift();   //to remove number from left
initialArray.unshift(2) //to add number on the left
console.log(initialArray);

for (let i=0;i<initialArray.length;i++){    //first way to iterate through an array
    console.log(initialArray[i]);
}

function logThing(str){
    console.log(str);
}

initialArray.forEach(logThing);  //second way to iterate through an array

function log1(){
    console.log(1);
}

function log2(){
    console.log(2);
}
function log3(){
    console.log("ilyyyyy");
}
function logWhatsPresent(fn){      //callback to any function and it becomes fn
    fn();
}

logWhatsPresent(log1)



