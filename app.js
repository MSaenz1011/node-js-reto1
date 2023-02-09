const {faker} = require("@faker-js/faker")
let fs = require('fs');
//import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

let USERS= [];

function createRandomUser(){
  return  faker.internet.userName()  
}

Array.from({ length: 1000 }).forEach(() => {
  USERS.push(createRandomUser());
});

USERS=USERS.join(' - ') //toString also works, but to give space between strings, it is better join

fs.appendFile("./name.txt", USERS, err => {
    if (err){
        return console.log(err);
    }
    else{
        console.log("Success");
    }
});