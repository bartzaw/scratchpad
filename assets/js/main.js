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
