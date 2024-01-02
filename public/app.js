import { invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
import { listTemplate } from "./classes/listTemplate.js";
const inv1 = new invoice("mario", "mario website", 200);
const inv2 = new invoice("luigi", "luigi website", 300);
const formatted = inv1.format();
console.log(formatted);
const invoices = [];
invoices.push(inv1); // some nice java.
invoices.push(inv2);
invoices.forEach((inv) => console.log(inv.client, /*inv.details cant because private now*/ inv.amount));
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// const form = document.querySelector('form')!; inferes the type to form.
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const itemList = document.querySelector(".item-list");
const list = new listTemplate(itemList);
let values; // need to do this first.
values = [toFrom.value, details.value, amount.valueAsNumber]; // this is now a tuple.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new invoice(...values);
    }
    else {
        doc = new payment(...values);
    }
    list.render(doc, type.value, "end");
});
const person = {
    name: "ahmed",
    age: 20,
    speak: (text) => {
        console.log(text);
    },
    spend(money) {
        return money;
    },
};
person.speak("hello");
console.log(person.spend(40));
const greet = (someone) => {
    console.log(someone.name);
};
greet(person);
