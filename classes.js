//classes
class Person
{
    //properties
    personName;
    personAge;
    personSalary;

    //methods
    getDetails()
    {
        return this.personName;
    }

    hikeSalary(amount)
    {
        return this.personSalary = this.personSalary+amount;
    }
}

//heap memory

//Objects
var P1 = new Person();
P1.personName = "Ali";
P1.personAge = 25;
P1.personSalary = 40000;

console.log(P1);
console.log(P1.personAge);

console.log(P1.getDetails());
console.log(P1.hikeSalary(5000));

var P2 = new Person();
P2.personName = "Omer";
P2.personAge = 24;
P2.personSalary = 50000;

console.log(P2);
console.log(P2.personName);

class Teacher
{
    //properties
    teacherName;
    mainSubject;
    teacherSalary;

    //constructor
    constructor(tName, mSub, tSal)
    {
        this.teacherName = tName;
        this.mainSubject = mSub;
        this.teacherSalary = tSal;
    }

    //methods
    getDetails()
    {
        return this.teacherName;
    }
}

//Object creation
var T1 = new Teacher('Amer', 'C', 35000);
console.log(T1);

var T2 = new Teacher('Intesar', 'AI', 30000);
console.log(T2);



