let names = ["ahmed"];
names.push("bm");

let obj = {
  name: "mario",
  age: 30,
};

obj.age = 40;

let obj2 = {
  ...obj,
  height: 1.7,
};

let obj3: any = {};

obj3.name = "";

const add = (x: number, y: number, z?: number | string) => {
  if (z === undefined) return x + y;
  return typeof z === "number" ? x + y + z : z;
};

let res = add(5, 3);

let someFunc: Function;
