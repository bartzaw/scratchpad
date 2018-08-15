//Complete the solution so that the function will break up camel casing, using a space between words.
// Example: solution('camelCasing') // => should return 'camel Casing'

function solution(string) {
    var stringToArr = string.split("");
    for (var i = 0; i < string.length;i++) {
        if (stringToArr[i] === stringToArr[i].toUpperCase()) {
            stringToArr[i] = " " + stringToArr[i];
        }

    }
    return stringToArr.join("");
}


// Number of people in the bus

var number = function(busStops){
    var passengersNumber = 0;
    for (var i = 0; i < busStops.length; i++) {
        var newPassengersNumber = busStops[i][0] - busStops[i][1];
        passengersNumber = passengersNumber + newPassengersNumber;
    }
    return passengersNumber;
}

// Convert a string to an array

function stringToArray(string){
    return string.split(' ');
}

// A Needle in the Haystack

function findNeedle(haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') return 'found the needle at position ' + i;
    }
}

// Remove First and Last Character

function removeChar(str) {
    return str.slice(1, -1);
}

// Beginner - Lost Without a Map

function maps(x){
    var doubledArr = x.map(function(x) {
        return x * 2});
    return doubledArr;
}

// The falling speed of petals

function sakuraFall(v) {
    if(v <= 0){
        return 0;
    }
    else {
        return 400 / v;
    }
}

// Do I get a bonus?

function bonusTime(salary, bonus) {
    return bonus?'£'+(salary*10):'£'+salary
}

// Vowel Count

function getCount(str) {
    var vowelsCount = 0;

    for(var i=0; i<str.length; i++){
        if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u')
            vowelsCount++;
    }

    return vowelsCount;
}

// Jenny's secret message

function greet(name){
    return (name === 'Johnny' ? "Hello, my love!" : "Hello, " + name + "!")
}

// Sum without highest and lowest number

function sumArray(array) {
    if (array === null || !isNaN(array)) {
        return 0
    }else{
        var min = Math.min.apply(Math, array)
        var max = Math.max.apply(Math, array)
        var total = 0
        for (var i = 0; i < array.length;i++) {
            total += array[i]
        }
        return eval(total - min - max)
    }
}

// Convert number to reversed array of digits

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

// Get the mean of an array

function getAverage(marks){
    var average = 0;
    for (var i = 0; i < marks.length;i++) {
        var average = marks[i] + average;
    }
    return Math.floor(average/marks.length)
}

// Return Negative

function makeNegative(num) {
    if (num > 0) {
        return num*-1;
    }
    return num
}

// Sum of positive

function positiveSum(arr) {
    for (var i = 0; i < arr.length;i++) {
        if (arr[i] < 0 || isNaN(arr[i])) {
            arr[i]= 0;
        }
    }
    return arr.reduce(function(prev,curr){return prev + curr;},0);
}

// Counting sheep...

function countSheeps(arrayOfSheep) {
    var counter = 0;
    for (var i = 0; i < arrayOfSheep.length;i++) {
        arrayOfSheep[i] ? counter++ : false;
    }
    return counter
}

// String cleaning

function stringClean(str){

    var cleanStr = '';
    for (var i = 0; i < str.length;i++) {
        if (isNaN(str[i]) || str[i]===" " || str[i] ==="''") {
            cleanStr += str[i];
        }
    }

    return cleanStr
}

// Square Every Digit

function squareDigits(num){

    var numString = num.toString();
    var results = [];

    for (var i = 0; i < numString.length; i++) {
        results.push(Math.pow(numString[i], 2));
    }
    return Number(results.join(''));
}

// Remove String Spaces

function noSpace(x){
    return x.replace(/\s/g,'');
}

// String repeat

function repeatStr (n, s) {
    return s.repeat(n);
}

// Factorial

function factorial(n) {

    var nval = 1;
    if (n < 0 || n > 12) {
        throw new RangeError('Value must be smaller than ' + 12 + ' and larger than ' + 0);}
    for(var i = 2; i<=n; i++) {

        nval = nval*i;
    }
    return nval;
};

// Even or Odd

function even_or_odd(number) {
    number = (number % 2 === 0) ? "Even" : "Odd";
    return number;
}

// Opposite number

function opposite(number) {
    return number*-1;
}

// Take a Ten Minute Walk

function isValidWalk(walk) {
    var possibleDirections = {
        'n': 0,
        's': 0,
        'e': 0,
        'w': 0
    }
    walk.forEach(function(direction) {
        possibleDirections[direction]++;
    })
    var displacement = {
        x: possibleDirections['n'] - possibleDirections['s'],
        y: possibleDirections['e'] - possibleDirections['w']
    }
    return walk.length === 10 && displacement.x === 0 && displacement.y === 0;
}

// Equal Sides Of An Array

function findEvenIndex(arr){
    for(i = 1; i < arr.length-1; i++){
        var left = arr.slice(0,i).reduce((a,b) => a + b)
        var right = arr.slice(i+1).reduce((a,b) => a+b)
        if(left === right){
            return i
        }
    }
    return -1
}

// Stop gninnipS My sdroW!

function spinWords(string){
    return string.split(' ')
        .map(word => {return word.length > 4 ? word.split('').reverse().join('') : word;
}).join(' ');}

// Find the odd int

function findOdd(A) {
    var counter = 0;
    for(var i = 0; i < A.length; i++) {
        for(var j = 0; j < A.length; j++) {
            if(A[i] == A[j]) {
                counter++;
            }
        }
        if (counter % 2 !== 0) {
            return A[i];
        }
    }
}

// Your order, please

function order(words){
    var result = [];
    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var string = words.split(" ");
    for (var i = 0; i < num.length; i++) {
        for (var j = 0; j < string.length; j++) {
            if (string[j].includes(num[i])) {
                result.push(string[j]);
            }
        }
    }
    return result.join(" ");
}

// Multiples of 3 or 5

function solution(number){
    var sum = 0;
    for(i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum = sum + i;
        }
    }
    return sum
}