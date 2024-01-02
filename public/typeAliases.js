"use strict";
const greet = (user) => {
    console.log(`hi ${user.name}`);
};
greet({ name: "ahmed", uid: 1 });
const logDetails = (user) => {
    console.log(user);
};
logDetails({ name: "ahmed", uid: 1 });
