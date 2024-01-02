import { hasFormatter } from "../interfaces/hasFormatter.js";

export class invoice implements hasFormatter {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} is working on ${this.details} and is paid ${this.amount}`; // possible to expose private like this.
  }
}
