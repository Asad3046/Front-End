//looping statements
//1. while loop

var x=0; //initialization
while(x<=5) //condition
{
    document.writeln("hello world! <br>"); //statements
    x++; //iteration statement
}
document.writeln("<br>");

//2. do-while loop

var y=0;
do{
    document.writeln("hello javascript <br>");
    y++;
}
while(y<=5)
    document.writeln("<br>");

//3. for loop

for(i=0;i<=5;i++)
{
    console.log("welcome to javascript");
}

//example: Table of 20 by using for loop

for(j=1;j<=10;j++)
{
    document.writeln('20*'+j+'='+20*j+'<br>')
}