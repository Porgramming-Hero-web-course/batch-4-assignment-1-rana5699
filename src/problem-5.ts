const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

// const person = { name: "Alice", age: 30, id: 1233, email: "sswsss" };
// console.log(getProperty(person, "id"));
