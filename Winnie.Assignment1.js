//variable v=velocity, t=time, m=mass, a=acelaration, d=distance, f=force
var v, tc, t, m, a, d, f, tf;
var choice, result, unit;

//function to select operation
function askOperation()
{
    choice = prompt("Please enter 'f' for force and 'd' for distance and 't' for temperature");
    switch (choice)
    {
        case 'f': m = prompt("Mass (kg)");
                  a = prompt("Accelaration (m/s2)");
                  result = calculateForce(m,a);
                  unit = "Newtons"
                  break;
        case 'd': v = prompt("Velocity (m/s)");
                  t = prompt("Time (s)");
                  result = calculateDistance(v,t);
                  unit = "metres"
                  break;
        case 't': tc = prompt("Temperature (Enter degree C)");
                  result = calculateFahrenheit(tc);
                  unit = "fahrenheit"
                  break;
        default : alert("Invalid input");
                  result = "ERROR!"; 
                  unit = "Refresh"
                  break;             
    }
}

function calculateResult()
{
 document.getElementById("result").innerHTML = "Your results for: "+ choice+" are: "+result+" "+unit;   
}

//function to calculate distance  d=vt
function calculateDistance(v, t)
{
    d = v*t;
    return d;
}

//function to calculate force f=ma
function calculateForce(m, a)
{
    f = m*a;
    return f;
}

//function to calculate fahrenheit
function calculateFahrenheit(tc)
{
    tf = tc*(9/5) + 32;
    return tf;
}