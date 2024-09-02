// length of
function getLength(str){
    console.log("Orignal string is: "+str)
    console.log("Length of the string is " +str.length)
}
getLength("Hello World")

//index of, lastIndexof
function getIndex(str, target){
    console.log("Orignal strings is: "+ str);
    console.log("Index:",str.indexOf(target));
    }
getIndex("Hello world", "d");

//get slice
function getSlice(str, start, end){
    console.log("Orignal strings is: "+ str);
    console.log("Slice of the string is: "+ str.slice(start, end));
    }
getSlice("Hello World",0,5)

//replaceString
function replaceString(str, target, replacement){
    console.log("Orignal strings is: "+ str);
    console.log(str.replace(target, replacement));
    }
replaceString("Hello world", "world", "JS")

//split
function splitFunc(str, target){
    console.log("Orignal strings is: "+ str);
    console.log(str.split(target));
    }
splitFunc("Hello World"," ");

//trim
function trimFunc(str){
    console.log("Orignal strings is: "+ str);
    console.log(str.trim());
    }
trimFunc("     Hello    ")

//to upper
function toUpper(str){
    console.log("Orignal strings is: "+ str);
    console.log(str.toUpperCase());
    }
toUpper("hi")

//to lower
function toLower(str){
    console.log("Orignal strings is: "+str);
    console.log(str.toLowerCase());
    }
    toLower("HI")
