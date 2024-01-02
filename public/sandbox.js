"use strict";
let names = ["ahmed"];
names.push("bm");
let obj = {
    name: "mario",
    age: 30,
};
obj.age = 40;
// obj.newProperty = "anything" doesnt work. cant add any new property
let obj2 = Object.assign(Object.assign({}, obj), { height: 1.7 });
let obj3 = {};
obj3.name = "";
// optional params
const add = (x, y, z) => {
    if (z === undefined)
        return x + y;
    return typeof z === "number" ? x + y + z : z;
};
let res = add(5, 3); // auto inferes the type so we cant modify the type of res.
// const func = (a:number, b:number): number | string => {
//   return a * b;
// } we can explicitly declare the return type like this. not needed bcz ts inferes the return type
// type StringOrNum = string | number;
// type User = { name: string; uid: StringOrNum };
// const greet = (user: User) => {
//   console.log(`hi ${user.name}`);
// };
// greet({ name: "ahmed", uid: 1 });
// const logDetails = (user: User) => {
//   console.log(user);
// };
// logDetails({ name: "ahmed", uid: 1 });
// function type
let someFunc;
