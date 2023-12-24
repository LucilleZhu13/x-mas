const radioBtns = document.querySelectorAll('input[type="radio"]');
var user_name;
var number;
var color;
var thing;
var closeness;
var temp;
var list = ["color", "thing", "number", "number2", "name", "close"];
var decorlist = ["color", "thing", "number", "number2"];

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

        varList = [color, thing, number % 3, number % 2, user_name, closeness];
        for(var i = 0; i < 6; i++) {
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
    // github version
    var strContent = document.cookie;

    // go live version
    // var strContent = document.cookie.substring(61, document.cookie.length);
    var rList = strContent.split("; ");
    for(var i = 0; i < 6; i++) {
        if (decorlist.includes(rList[i].split("=")[0])) {
            list[i] = rList[i].split("=")[0];
            var temp = rList[i].split("=")[1];
            varList[i] = temp;
            decorHelper(list[i], varList[i]);
        }
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
        case "number2":
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
    button.onclick = function() {
        cardCreator();
    }
    
}


function cardCreator(){
    console.log("Entering cardCreator");
    window.location.href = "XmasCard.html";
}

function cardDecor() {
    var varList = [];
    var list = [];
    var the_name;
    var the_close;
    console.log(document.cookie);
    // github version
    var strContent = document.cookie;

    // go live version
    // var strContent = document.cookie.substring(61, document.cookie.length);
    var rList = strContent.split("; ");

    for(var i = 0; i < 6; i++) {
        if (decorlist.includes(rList[i].split("=")[0])) {
            list[i] = rList[i].split("=")[0];
            var temp = rList[i].split("=")[1];
            varList[i] = temp;
        } else if (rList[i].split("=")[0] == "name"){
            the_name = rList[i].split("=")[1];
        } else {
            the_close = rList[i].split("=")[1];
        }

        let targetId = document.getElementById("Canvas");
        var zindex = 0;
        switch(list[i]){
            case "color":
                zindex = 6;
                break;
            case "thing":
                zindex = 5;
                break;
            case "number":
                zindex = 4;
                break;
            case "number2":
                zindex = 3;
                break;
        }
        if (varList[i] != null) {
            // console.log(list[i]);
            var div = document.createElement("div");
            var img = document.createElement("img");
            targetId.appendChild(div);
            div.id = list[i] + varList[i];
            img.height = "300";
            img.src = "images/"+list[i]+"_"+varList[i]+".PNG";
            div.appendChild(img);
            var style = document.createAttribute("style");
            div.setAttributeNode(style);
            div.style.zIndex = zindex;
            div.style.position = "fixed"
            div.style.top = "3%";
            div.style.margin = "0 auto";
            div.style.left = "0";
            div.style.right = "0";
        }
        
    }
    greeting(the_close, the_name);

}

function greeting(the_close, the_name) {
    let paraDiv1 = document.getElementById("XmasTitle");
    var titleDiv = document.createElement("titleDiv");
    paraDiv1.appendChild(titleDiv);
    titleDiv.innerHTML = "To " + the_name + ": " + "</br>" + "</br>";
    titleDiv.style.position = "fixed";
    titleDiv.style.textAlign = "left";
    titleDiv.style.width = "500px";
    titleDiv.style.top = "53%";
    titleDiv.style.margin = "0 auto";
    titleDiv.style.left = "0";
    titleDiv.style.right = "0";
    titleDiv.style.fontFamily = "PixelifySans";
    titleDiv.style.fontSize = "x-large"


    let paraDiv2 = document.getElementById("XmasGreetings");
    var greetingDiv = document.createElement("greetingDiv");
    paraDiv2.appendChild(greetingDiv);
    greetingDiv.style.position = "fixed";
    greetingDiv.style.textAlign = "left";
    greetingDiv.style.width = "500px";
    greetingDiv.style.top = "58%";
    greetingDiv.style.margin = "0 auto";
    greetingDiv.style.left = "0";
    greetingDiv.style.right = "0";
    greetingDiv.style.fontFamily = "PixelifySans";
    greetingDiv.style.fontSize = "large"
    greetingDiv.style.whiteSpace = "normal";
    greetingDiv.style.lineHeight = "1.25";
    greetingDiv.innerHTML = "Merry Xmas and happy holidays! " + "</br>" + "</br>";
    if (the_name == "Eric" || the_name == "eric" || the_name == "ERIC" || the_name == "Eric Zhou") {
        greetingDiv.innerHTML += "I am back in Atlanta now but my trip to DC was amazing! It's a very beautiful city, and I had a really good time there." + "</br>" + "</br>";
        greetingDiv.innerHTML += "The campus is sooo empty and I'm still getting used to it. I really miss having people around but I guess this is certainly an experience." + "</br>" + "</br>";
        greetingDiv.innerHTML += "Wishing you a happy and relaxing break!  (I love your cat!)"
    }

    let paraDiv3 = document.getElementById("XmasPS");
    var psDiv = document.createElement("psDiv");
    paraDiv3.appendChild(psDiv);
    psDiv.style.position = "fixed";
    psDiv.style.textAlign = "left";
    psDiv.style.width = "500px";
    psDiv.style.top = "90%";
    psDiv.style.margin = "0 auto";
    psDiv.style.left = "0";
    psDiv.style.right = "0";
    psDiv.style.fontFamily = "PixelifySans";
    psDiv.style.fontSize = "medium"
    psDiv.style.whiteSpace = "normal";
    psDiv.style.lineHeight = "1.25";

    if (the_name == "Eric" || the_name == "eric" || the_name == "ERIC" || the_name == "Eric Zhou") {
        psDiv.innerHTML = "P.S. check your Steam for gift ❤︎";
    }

    let paraDiv4 = document.getElementById("XmasLu");
    var luDiv = document.createElement("luDiv");
    paraDiv4.appendChild(luDiv);
    luDiv.style.position = "fixed";
    luDiv.style.textAlign = "right";
    luDiv.style.width = "500px";
    luDiv.style.top = "92%";
    luDiv.style.margin = "0 auto";
    luDiv.style.left = "0";
    luDiv.style.right = "0";
    luDiv.style.fontFamily = "PixelifySans";
    luDiv.style.fontSize = "x-large"
    luDiv.style.whiteSpace = "normal";
    luDiv.style.lineHeight = "1.25";

    switch(the_close) {
        case "1":
            luDiv.innerHTML = "Best regards," + "</br>" + "Lucille Zhu";
            break;
        case "2":
            luDiv.innerHTML = "Best," + "</br>" + "Lucille Zhu";
            break;
        case "3":
            luDiv.innerHTML = "Best wishes," + "</br>" + "Lucille Zhu";
            break;
        case "4":
            luDiv.innerHTML = "Love," + "</br>" + "Lucille Zhu";
            break;
        case "5":
            luDiv.innerHTML = "Yours truly," + "</br>" + "Lucille Zhu";
            break;
    }

    
}