var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    var theRequest = new XMLHttpRequest();
    theRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    theRequest.onload = function() {
        var myData = JSON.parse(theRequest.responseText);
        renderHTML(myData);
    };
    theRequest.send();
});

function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ". </p>"
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}