const normalPerson = {
    firstName: "kamal",
    lastName: "Khan",
    salary: 12000,
    school: "BDT",
    getFullName: function () {
        console.log(this)
        console.log(`School Name:${this.school}, Fullname:${this.firstName + " " + this.lastName}, Salary:${this.salary}`);
    },
    totalSalary: function (amount,tips,tax) {
        console.log(this)
        // const slary = this.salary - amount
        // return slary;
        this.salary = `Now salary: ${this.salary - amount - tips - tax}`;
        return this.salary;
    }
}
 normalPerson.getFullName();
 normalPerson.totalSalary(2000)
 normalPerson.totalSalary(3000)
 console.log(normalPerson.salary)


const HighPerson = {
    firstName: "jamal",
    lastName: "Khan",
    salary: 11000,
    school: "BDT",
}
//Bind::::

const high = normalPerson.getFullName.bind(HighPerson);
const total =normalPerson.totalSalary.bind(HighPerson)
high();
total(1000,100,20);
console.log(HighPerson.salary)

// Call::::
normalPerson.getFullName.call(HighPerson)
normalPerson.totalSalary.call(HighPerson,2000,100,900)
console.log(HighPerson.salary)

const MiddlePerson = {
    firstName: "Samal",
    lastName: "Khan",
    salary: 12000,
    school: "BDT",
}

//Apply:::
normalPerson.totalSalary.apply(MiddlePerson,[2000,1000,1000])
console.log(MiddlePerson.salary)