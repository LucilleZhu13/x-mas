const radioBtns = document.querySelectorAll('input[type="radio"]');
var user_name;
var number;
var color;
var thing;
var closeness;
var temp;

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

    user_name = document.getElementById("name").value;
    number = parseInt(document.getElementById("number").value);
    if (document.getElementById("number").value.length == 0 ){
        alert("plz fill in a number");
    } else if (isNaN(number) || number >= 100 || number <= 0) {
        alert("plz fill in a correct number");
    } else {
        temp = document.getElementsByName("color");
        color = null;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].checked) {
                color = temp[i].value;
            }
        }

        temp = document.getElementsByName("thing");
        thing = null;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].checked) {
                thing = temp[i].value;
            }
        }

        temp = document.getElementsByName("close");
        closeness = null;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].checked) {
                closeness = temp[i].value;
            }
        }

        window.location.href = "deerthink.html";
    }
    
}

function decor() {

}

function decorHelper {
    
}