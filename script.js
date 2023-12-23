const radioBtns = document.querySelectorAll('input[type="radio"]');
var user_name;
var number;
var color;
var thing;
var closeness;
var temp;
var list = ["color", "thing", "number", "number2"];
var varList;

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
        varList = [color, thing, number%3, number%2];
        for (var i = 0; i < 4; i++) {

            console.log(varList[i]);
            // decorHelper(list[i], varList[i]);
        }

        window.location.href = "deerthink.html";
    }
    
}

function decor() {
    
    for (var i = 0; i < 4; i++) {

        console.log(varList[i]);
        // decorHelper(list[i], varList[i]);
    }
}

function decorHelper(picStr, picVar) {
    let targetId = document.getElementById("treeCanvas");
    var zindex = 0;
    switch(picStr.match(/^[a-z|A-Z]+/gi).toString()){
        case "color":
            zindex = 4;
            break;
        case "thing":
            zindex = 3;
            break;
        case "number":
            zindex = 2;
            break;
        case "number1":
            zindex = 1;
            break;
    }

    var div = document.createElement("div");
    var img = document.createElement("img");
    targetId.appendChild(div);
    div.id = picStr + picVar;
    div.classList = "Canvas";
    img.height = "600";
    img.src = "images/"+picStr+"_"+picVar+".PNG";
    div.appendChild(img);
    var style = document.createAttribute("style");
    div.setAttributeNode(style);
    div.style.zIndex = zindex;
}