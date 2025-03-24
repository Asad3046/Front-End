//parent class(super class, base class)
class Parent
{
    name;
    age;
    #accountNumber; // to make a variable final we use '#' symbol
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    pgetDetails()
    {
        return `Name:${this.name}, Age:${this.age}`;
    }
}

//child class(sub class, derived class)
class Child extends Parent
{
    subject;
    constructor(name, age, subject)
    {
        super(name, age);
        this.subject = subject;
    }
    cgetDetails()
    {
        return `${super.pgetDetails()}, subject:${this.subject}`;
    }
}

var obj1 =  new Child('Anas', 18, 'Geography');
console.log(obj1);
console.log(obj1.cgetDetails());

var obj2 = new Child('Hamza', 70, 'History');
console.log(obj2);
console.log (obj2.cgetDetails());
