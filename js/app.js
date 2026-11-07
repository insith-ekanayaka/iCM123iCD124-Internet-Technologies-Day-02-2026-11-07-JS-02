// console.log("Hello, World!");


// let customers = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
// console.log(customers);



class Customer {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

}

let customer1 = new Customer("John Doe", 30, "123 Main St, Anytown, USA");
let customer2 = new Customer("Jane Smith", 25, "456 Elm St, Othertown, USA");

console.log(customer1);
console.log(customer2);