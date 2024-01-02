import { hasFormatter } from "../interfaces/hasFormatter.js";

export class payment implements hasFormatter {
  readonly recipient: string;
  private details: string;
  public amount: number;

  constructor(r: string, d: string, a: number) {
    this.recipient = r;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.recipient} is working on ${this.details} and is paid ${this.amount}`; // possible to expose private like this.
  }
}
