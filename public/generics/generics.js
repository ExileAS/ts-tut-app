"use strict";
const returnData = (user) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, user), { uid });
};
const data = returnData({ name: "ahmed", age: 20 });
console.log(data); //doesnt work cuz we dont necessairly know if the returned object has a name property,
const obj1 = {
    name: "ahmed",
    age: 20,
    data: { key: "gi" },
    moreData: [1, 2, 3],
};
const obj8 = {
    name: "ahmed",
    age: 20,
    data: "some data",
    moreData: ["1", "2", "3", "4"],
};
