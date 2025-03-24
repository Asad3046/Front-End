//set()---it avoids bad and wrong data, indirectly validating data.
//get()---calculations and manupulations.(simply to print the data)

class Student
{
    studName;
    studAge;
    
    constructor(studName, studAge)
    {
        this.studName = studName;
        this.studAge = studAge;
    }

    //setStudname()
    //getStudname()

    //setStudage()
    //getStudage()


    setStudname(value)
    {
        if(value==null||value==undefined)
        {
            console.error("null and undefined should not be pass for Student Name");
        }
        else if(value.length>30)
        {
            console.error("Student Name should not be more than 30 characters");
        }
        else
        {
            this.studName = value;
        }
    }

    getStudname()
    {
        return this.studName;
    }

    setStudAge(value)
    {
        if(value>=0&&value<=100)
        {
            this.studAge = value;
        }
        else
        {
            console.error("Student Age should be in between 0 to 100");
        }
    }

    getStudAge()
    {
        return this.studAge;
    }

}

var s1 = new Student(); //object creation 's1'

s1.setStudname(null); //test case for null
console.log(s1.getStudname()); //should be undefined due to failed validation

s1.setStudname('Asad'); //valid name
console.log(s1.getStudname()); //should print 'Asad'

s1.setStudAge(40); //valid age
console.log(s1.getStudAge()); //should print 40

s1.setStudAge(115); //Invalid age
console.log(s1.getStudAge()); //should still print 40, because 150 is invalid
