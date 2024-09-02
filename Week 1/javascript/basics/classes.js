class Animal{
    constructor(name,age, speaks){
        this.name = name;
        this.age = age;
        this.speaks= speaks;
        }
        static myType(){
            return ("Animal");
        }
        speak(){
            console.log("hi there " + this.speaks);
        }
}


let dog = new Animal("dog",4,"bhow bhow");   //creating object
let cat= new Animal("cat",4,"meow");
cat.speak();

console.log(Animal.myType())     //static func can be called on class dont need objects