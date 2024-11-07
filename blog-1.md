# Understanding Union and Intersection Types in TypeScript with Simple Code Examples

Two important features in type scripts are **Union types** and **Intersection types**. Both of these are extremely important in making our code more readable and error free.

Let's try to understand through examples how these two types impact our daily thousands of code lines.

---

## What is a `Union Type` ?

A union type is where one variable holds more than one type of data. Suppose a ` response` variable has three pieces of data (`"success"`, `"error"`, `"pending"`) or `number`. Here by using union type we can easily avoid such trouble and make our code more readable.

### Example of `Union Type`

```typescript
type Status = "success" | "error" | "pending";

function handleStatus(status: Status): string {
  if (status === "success") {
    console.log("Operation was successful!");
  } else if (status === "error") {
    console.log("An error occurred.");
  } else {
    console.log("The operation is pending...");
  }
}

handleStatus("success"); // output: Operation was successful!
handleStatus("pending"); // output: The operation is pending...
```

## What is a `Intersection Type` ?

This time I say intersection. `Intersection type` is where a variable is forced to hold more than one data.
Suppose we have a user management system where some users can be **admins**. That means here I will need **user information** and **admin** will need extra super power. Since we need both here, we can use the `intersection` here.

Let's have a look.....

```typescript
type User ={
    name:string;
    email:string;
}

type Admin ={
    superPower:string;
}

type AdminUser = User & Admin

const getAdmin = (admin:AdminUser):string =>{

    return `Name: ${admin.name}, Email: ${admin.email}, and this user has superpower: ${admin.superPower}`;

}
const user : AdminUser ={
    name:"Sohel"
    email:"sohel@gmail.com"
    superPower:"Admin"
}
console.log(getAdmin(user))
//output : Name: Sohel, Email: sohel@gmail.com, and this user has superpower: Admin

```

All in all we can say that these two amazing features of Type Script make our code more readable and flexible.
