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

    
    if (document.getElementById("number").value.length == 0) {
        alert("plz fill in a number");
    } else if (isNaN(number) || number >= 100 || number <= 0) {
        alert("plz fill in a correct number");
    } else if (color == null || thing == null || closeness == null) {
        alert("Plz fill in all the questions");
    } else {
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
    var strContent = document.cookie.substring(61, document.cookie.length);
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
    var strContent = document.cookie.substring(61, document.cookie.length);
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
    titleDiv.style.width = "380px";
    titleDiv.style.top = "53%";
    titleDiv.style.margin = "0 auto";
    titleDiv.style.left = "0";
    titleDiv.style.right = "0";
    titleDiv.style.fontFamily = "PixelifySans";
    titleDiv.style.fontSize = "large"


    let paraDiv2 = document.getElementById("XmasGreetings");
    var greetingDiv = document.createElement("greetingDiv");
    paraDiv2.appendChild(greetingDiv);
    greetingDiv.style.position = "fixed";
    greetingDiv.style.textAlign = "left";
    greetingDiv.style.width = "380px";
    greetingDiv.style.top = "58%";
    greetingDiv.style.margin = "0 auto";
    greetingDiv.style.left = "0";
    greetingDiv.style.right = "0";
    greetingDiv.style.fontFamily = "PixelifySans";
    greetingDiv.style.fontSize = "medium"
    greetingDiv.style.whiteSpace = "normal";
    greetingDiv.style.lineHeight = "1.15";
    greetingDiv.innerHTML = "Merry Xmas and happy holidays! " + "</br>" + "</br>";
    if (the_name == "Eric" || the_name == "eric" || the_name == "ERIC" || the_name == "Eric Zhou") {
        greetingDiv.innerHTML += "Thank you for being my friend and all the good times we had together! I am back in Atlanta now but my trip to DC was amazing! It's a very beautiful city indeed." + "</br>" + "</br>";
        greetingDiv.innerHTML += "The campus is sooo empty and I'm still getting used to it. I really miss having people around but I guess this is certainly an experience." + "</br>" + "</br>";
        greetingDiv.innerHTML += "Wishing you a happy and relaxing break!" + "</br>" + "(I love your cat!)";
    } else if (the_name == "Vapour" || the_name == "Kyle" || the_name == "Tony" || the_name == "Wilson" || the_name == "Aimee") {
        greetingDiv.innerHTML += "I miss you so so much! I wish I can meet you instead of staying in Atlanta! I miss Shenzhen and all the food."+ "</br>" + "</br>";
        greetingDiv.innerHTML += "The campus is sooo empty now and I'm still getting used to it. It's kinda weird bc it's so quite." + "</br>" + "</br>";
        greetingDiv.innerHTML += "Thank you for supporting and loving me all the time! I wish you a happy and relaxing break!"
        the_close = "5";
    } else if (the_name == "Grace" || the_name == "Semiaris") {
        greetingDiv.innerHTML += "I'm sooo glad I have you and soooo happy you are here with me in Atlanta. Otherwise I'm gonna be so depressed and sad."+ "</br>" + "</br>";
        greetingDiv.innerHTML += "Thank you for being such an amazing friend! I love you and I wish you a happy and relaxing break!"+ "</br>" + "</br>";
        greetingDiv.innerHTML += "Good luck with you driver's license! I support you mentally and physically!"
        the_close = "5";
    } else if (the_name == "Yolanda" || the_name == "yolanda" || the_name == "Yolanda Li") {
        greetingDiv.innerHTML += "Thanks again for inviting me to Maryland! I had such a great time and I miss you already!"+ "</br>" + "</br>";
        greetingDiv.innerHTML += "The campus is sooo empty now and I'm still getting used to it. I really miss having people around but I guess this is certainly an experience." + "</br>" + "</br>";
        greetingDiv.innerHTML += "Wishing you a happy and relaxing break!";
        the_close = "5";
    } else if (the_name == "Alex" || the_name == "Alex Qiu" || the_name == "Frank" || the_name == "Frank Wu" || the_name == "Tom" || the_name == "Kecheng" || the_name == "Kecheng Dai" || the_name == "Ying" || the_name == "Huimin" || the_name == "Sean") {
        greetingDiv.innerHTML += "Thank you for being a great badminton partner! I had a really good time this semester playing badminton with you!"+ "</br>" + "</br>";
        greetingDiv.innerHTML += "None of my badminton friends are here and the CRC is closed. I really miss you all and already looking forward to playing next semester!" + "</br>" + "</br>";
        greetingDiv.innerHTML += "Wishing you a happy and relaxing break!";
        the_close = "4";
    } else {
        switch(the_close) {
            case "1":
                
                break;
            case "2":
                greetingDiv.innerHTML += "Thank you for a great time we had together!" + "</br>" + "</br>";
                greetingDiv.innerHTML += "I wish you a happy and relaxing break! I hope we can keep in touch.";
                break;
            case "3":
                greetingDiv.innerHTML += "Thank you for a great semester and all the good times we had together! I really miss you and hope to see you soon. Plz keep in touch with me!"+ "</br>" + "</br>";
                greetingDiv.innerHTML += "I wish you a happy and relaxing break!";
                break;
            case "4":
                greetingDiv.innerHTML += "Thank you for being an amazing freind and all the good times we had together! I miss you so so much! I wish I can see you soon."+ "</br>" + "</br>";
                greetingDiv.innerHTML += "Before that, take good care of yourself and I wish you a happy and relaxing break!"
                break;
            case "5":
                greetingDiv.innerHTML += "Thank you for always supporting me and loving me! I'm sooo grateful having you as my BEST friend! I miss you so so much! I wish I can see you soon."+ "</br>" + "</br>";
                greetingDiv.innerHTML += "Before that, take great care of yourself and I wish you a happy and relaxing break!"
                break;
        }
    }

    let paraDiv3 = document.getElementById("XmasPS");
    var psDiv = document.createElement("psDiv");
    paraDiv3.appendChild(psDiv);
    psDiv.style.position = "fixed";
    psDiv.style.textAlign = "left";
    psDiv.style.width = "380px";
    psDiv.style.top = "97%";
    psDiv.style.margin = "0 auto";
    psDiv.style.left = "0";
    psDiv.style.right = "0";
    psDiv.style.fontFamily = "PixelifySans";
    psDiv.style.fontSize = "small"
    psDiv.style.whiteSpace = "normal";
    psDiv.style.lineHeight = "1.25";

    if (the_name == "Eric" || the_name == "eric" || the_name == "ERIC" || the_name == "Eric Zhou") {
        psDiv.innerHTML = "P.S. check your Steam for gift ❤︎";
    } else if (the_name == "Yolanda" || the_name == "yolanda" || the_name == "Yolanda Li") {
        psDiv.innerHTML = "(Send 李小猫 my love ❤︎)";
    }

    let paraDiv4 = document.getElementById("XmasLu");
    var luDiv = document.createElement("luDiv");
    paraDiv4.appendChild(luDiv);
    luDiv.style.position = "fixed";
    luDiv.style.textAlign = "right";
    luDiv.style.width = "380px";
    luDiv.style.top = "94%";
    luDiv.style.margin = "0 auto";
    luDiv.style.left = "0";
    luDiv.style.right = "0";
    luDiv.style.fontFamily = "PixelifySans";
    luDiv.style.fontSize = "large"
    luDiv.style.whiteSpace = "normal";
    luDiv.style.lineHeight = "1.15";

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