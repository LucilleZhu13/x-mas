const radioBtns = document.querySelectorAll('input[type="radio"]');
var user_name;
var number;
var color;
var thing;

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("colorform").reset()
    document.getElementById("number").value = "";
    document.getElementById("thingform").reset()
    document.getElementById("likeform").reset()
}

function submitForm() {
    if (document.getElementById("name").value.length == 0 ){
        alert("plz fill in your name");
    }
    if (document.getElementById("number").value.length == 0 ){
        alert("plz fill in a number");
    }

    user_name = document.getElementById("name").value;
    number = parseInt(document.getElementById("number").value);

    if (isNaN(number) || number >= 100 || number <= 0) {
        alert("plz fill in a correct number");
    }
}