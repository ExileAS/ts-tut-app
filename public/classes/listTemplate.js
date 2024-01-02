export class listTemplate {
    constructor(ul) {
        this.ul = ul;
    }
    render(item, head, order) {
        const title = document.createElement("h4");
        const li = document.createElement("li");
        const p = document.createElement("p");
        title.innerText = head;
        p.innerText = item.format();
        li.append(title);
        li.append(p);
        if (order === "start") {
            this.ul.prepend(li);
        }
        else {
            this.ul.append(li);
        }
    }
}
