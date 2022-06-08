// Add answers here 

// #### 1. Los or New?
// Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.
console.log("Conditional Algorithms");
console.log("1. Los or New?");

function nameOfCity(city) {
    if (city.toLowerCase().startsWith("los") || city.toLowerCase().startsWith("new")){
        return city;
    } else {
        return "The city name does not begin with Los or New"
    }
}

console.log(nameOfCity("Los Angeles"));
console.log(nameOfCity("London"));
console.log(nameOfCity("New york"));

// #### 2. isDivisible?
// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.
console.log("2. isDivisible?");

function isDivisible(num){
    if (num % 100 === 0){
        return true;
    } else {
        return false;
}
    }

    console.log(isDivisible(1));
    console.log(isDivisible(1000));


// #### 4. What's the weather?
 // Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".
    console.log("4. What'S the weather?");
    
    function isRaining(bool){
        return bool ? "wet day - you need an umbrella": "dry day - leave your umbrella at home";
    }

    console.log(isRaining(true));
    console.log(isRaining(false));
    
// ### Loops 

// #### 1. Sequence
// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.
    console.log("Loops");
    console.log("1. Sequence");

    function geometricalSequence(){
        let sequence = "";
        for (let i = 1; i <= 300; i*=2){
            sequence += i + " ";
        }
        return sequence;
    }

    console.log(geometricalSequence());


// #### 2. Multiples
// Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string. 
    console.log("2. Multiples");

    function multiplesOfThree(){
        let sequence = "";
        for (let i = 3; i <= 15; i+=3){
            sequence += i + " ";
        }
        return sequence;
    }

    console.log(multiplesOfThree());

// ### Math 

// #### 1. You've got the power
// Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.
    console.log("Math");
    console.log("1. You've got the power");

    function powerOf(num){
        return Math.pow(num, num);
    }

    console.log(powerOf(3));
    console.log(powerOf(4));

// ### Problem Solving 

// #### 1. How many? 
// Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 
console.log("Problem Solving");
console.log("1. How many?");

    function vowelCount(str){
        let count = 0;
        for (let i = 0; i < str.length; i++){
            if (str[i] === "a" || str[i] === "A" || str[i] === "e" || str[i] === "E" || str[i] === "i" || str[i] === "I" || str[i] === "o" || str[i] === "O" || str[i] === "u" || str[i] === "U"){
                count++;
            }
        }
        return count;
    }
    
    console.log(vowelCount("Hello"));
    console.log(vowelCount("How Are yoU?"));










    // DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

