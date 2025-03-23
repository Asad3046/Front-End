//parent class(super class, base class)
class Parent
{
    name;
    age;
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    pgetDetails()
    {
        return this.name;
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
        return `Name:${this.name}, age:${this.age}, subject:${this.subject}`;
    }
}

var obj =  new Child('Anas', 18, 'geography');
console.log(obj);

console.log(obj.cgetDetails());