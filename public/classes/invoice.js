export class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // changeStuff() {
    //   this.client = "something else";
    // } -> can't do that even inside the class.
    format() {
        return `${this.client} is working on ${this.details} and is paid ${this.amount}`; // possible to expose private like this.
    }
}
// more concise class but can be done like this only if we put the privacy key words:
// class invoice2 {
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ) {}
// }
// const inv3 = new invoice2("yoshi", "yoshi website", 150); // still works.
// console.log(inv3);
