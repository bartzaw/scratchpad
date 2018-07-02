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

// Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(Math, args)
    }
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