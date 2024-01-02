export class payment {
    constructor(r, d, a) {
        this.recipient = r;
        this.details = d;
        this.amount = a;
    }
    // changeStuff() {
    //   this.client = "something else";
    // } -> can't do that even inside the class.
    format() {
        return `${this.recipient} is working on ${this.details} and is paid ${this.amount}`; // possible to expose private like this.
    }
}
