const users='{"name":"harkirat","age":24,"gender":"male"}'

const user = JSON.parse(users)
console.log(user.name)

JSON.parse
JSON.stringify

const user1={
    name:"harkirat",
    age:24,
    gender:"male"
}

const finalString= JSON.stringify(user1)
console.log(finalString)

