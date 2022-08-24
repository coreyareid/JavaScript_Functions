

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    for (let i = 0; i < count; i++)
    {
        if (i % 2 == 0)
        {
            console.log(i);
        }
    }
    // Bonus
    if (count < 0) count = count * -1;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `${userName}, you are underage and cannot drive`;
    if (age >= 16)
    {
        console.log(aboveSixteen);
    }
    else if (age < 16)
    {
        console.log(belowSixteen);
    }
}
checkAge("Corey", 31);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y)
{
    if (x > 0 && y > 0)
    {
        return 1;
    }
    else if (x < 0 && y > 0)
    {
        return 2;
    }
    else if (x < 0 && y < 0)
    {
        return 3;
    }
    else if (x > 0 && y < 0)
    {
        return 4;
    }
    else 
    {
        return 0;
    }
}
console.log(checkQuadrant(1, 1));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function justTriangle(x, y, z)
{
    return x + y > z && x + z > y && y + z > x ;
}

function triangleCheck(x, y, z)
{
    let check = justTriangle(x, y, z);
    if (check)
    {
        if (x == y && y == z)
        {
            return 'Equilateral';
        }
        else if (x == y || y == z || x ==z)
        {
            return 'Isosceles';
        }
        else 
        {
            return 'Scalene';
        }
    } else 
    {
        return 'invalid triangle';
    }
}
console.log(triangleCheck(1, 2, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
// to be completed