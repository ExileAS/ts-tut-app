const returnData = (user: object) => {
  const uid = Math.floor(Math.random() * 100);
  return { ...user, uid };
};

const data = returnData({ name: "ahmed", age: 20 });
console.log(data);

interface someData<T, M> {
  name: string;
  age: 20;
  data: T;
  moreData: M[];
}

const obj1: someData<object, number> = {
  name: "ahmed",
  age: 20,
  data: { key: "gi" },
  moreData: [1, 2, 3],
};

const obj8: someData<string, string> = {
  name: "ahmed",
  age: 20,
  data: "some data",
  moreData: ["1", "2", "3", "4"],
};
