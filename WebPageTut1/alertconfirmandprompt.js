alert("Hi tell me your age");
let age= prompt("Enter your age ");
age=Number.parseInt(age);
if(age >=18)
{
    document.write("  You are eligible "+(typeof age));
    let result=confirm("Do you realy want to update");
    if(result)
    {
        document.write("  Lets Start update "+(typeof result));
    }
    else
    {
        document.write(" You may Read Only "+(typeof result));
    }
}
else
{
    alert("you are underage");
    document.write("  You are Not eligible "+(typeof age));
}
