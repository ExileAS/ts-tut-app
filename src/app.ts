import { invoice } from "./classes/invoice.js";
import { isPerson } from "./interfaces/isPerson.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";
import { payment } from "./classes/payment.js";
import { listTemplate } from "./classes/listTemplate.js";

const inv1 = new invoice("mario", "mario website", 200);
const inv2 = new invoice("luigi", "luigi website", 300);

const formatted = inv1.format();
console.log(formatted);

const invoices: invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach((inv) => console.log(inv.client, inv.amount));

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const itemList = document.querySelector(".item-list") as HTMLUListElement;

const list = new listTemplate(itemList);

let values: [string, string, number];

values = [toFrom.value, details.value, amount.valueAsNumber];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let doc: hasFormatter;

  if (type.value === "invoice") {
    doc = new invoice(...values);
  } else {
    doc = new payment(...values);
  }
  list.render(doc, type.value, "end");
});

const person: isPerson = {
  name: "ahmed",
  age: 20,
  speak: (text: string) => {
    console.log(text);
  },
  spend(money: number) {
    return money;
  },
};

person.speak("hello");
console.log(person.spend(40));

const greet = (someone: isPerson) => {
  console.log(someone.name);
};

greet(person);
