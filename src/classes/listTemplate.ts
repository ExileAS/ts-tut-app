import { hasFormatter } from "../interfaces/hasFormatter.js";

export class listTemplate {
  constructor(private ul: HTMLUListElement) {}

  render(item: hasFormatter, head: string, order: "start" | "end") {
    const title = document.createElement("h4");
    const li = document.createElement("li");
    const p = document.createElement("p");
    title.innerText = head;
    p.innerText = item.format();
    li.append(title);
    li.append(p);
    if (order === "start") {
      this.ul.prepend(li);
    } else {
      this.ul.append(li);
    }
  }
}
