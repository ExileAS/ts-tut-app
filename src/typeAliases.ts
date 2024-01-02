type StringOrNum = string | number;
type User = { name: string; uid: StringOrNum };

const greet = (user: User) => {
  console.log(`hi ${user.name}`);
};
greet({ name: "ahmed", uid: 1 });

const logDetails = (user: User) => {
  console.log(user);
};
logDetails({ name: "ahmed", uid: 1 });
