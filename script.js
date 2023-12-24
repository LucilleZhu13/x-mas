const radioBtns = document.querySelectorAll('input[type="radio"]');
var user_name;
var number;
var color;
var thing;
var closeness;
var temp;
var list = ["color", "thing", "number", "number2"];

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("colorform").reset()
    document.getElementById("number").value = "";
    document.getElementById("thingform").reset()
    document.getElementById("likeform").reset()
}



function submitForm() {
    if (document.getElementById("name").value.length == 0) {
        alert("plz fill in your name");
    }

    user_name = document.getElementById("name").value;
    number = parseInt(document.getElementById("number").value);
    if (document.getElementById("number").value.length == 0) {
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

        varList = [color, thing, number % 3, number % 2];
        for(var i = 0; i < 4; i++) {
            document.cookie = list[i]+"="+ varList[i];
        }

        window.location.href = "deerthink.html";

        // $.ajaxSetup({
        //     async: false
        // });

        // $.get("tree.html", function (data) {
        //     // Assuming the response is an object with properties color, thing, and number
        //     varList = [data.color, data.thing, data.number % 3, data.number % 2];
        //     window.location.href = "deerthink.html";
        // });
    }
}



function decor(){
    var varList = [];
    var list = [];
    console.log(document.cookie);
    // var strContent = document.cookie.substring(61, document.cookie.length);
    console.log(strContent);
    var rList = strContent.split("; ");
    for(var i = 0; i < 4; i++) {
        list[i] = rList[i].split("=")[0];
        var temp = rList[i].split("=")[1];
        varList[i] = temp;
        decorHelper(list[i], varList[i]);
    }
    buttonCreator();
}


function decorHelper(picStr, picVar) {
    let targetId = document.getElementById("treeCanvas");
    var zindex = 0;
    switch(picStr){
        case "color":
            zindex = 5;
            break;
        case "thing":
            zindex = 4;
            break;
        case "number":
            zindex = 3;
            break;
        case "number1":
            zindex = 2;
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
    div.style.position = "fixed"
    div.style.top = "0%";
    div.style.margin = "0 auto";
    div.style.left = "0";
    div.style.right = "0";
}

function buttonCreator() {
    let buttonId = document.getElementById("buttons");
    var button = document.createElement("button");
    button.innerHTML = "-->";
    var style = document.createAttribute("style");
    button.setAttributeNode(style);
    button.style.marginLeft = "30px";
    buttonId.appendChild(button);
    document.getElementById("decor").disabled = true;
}