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


