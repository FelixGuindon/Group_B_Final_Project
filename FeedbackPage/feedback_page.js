function runapp() {
    //alert("pp");
    var firstname;
    firstname = document.getElementById("firstname").value;
    secondname = document.getElementById("secondname").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    comments = document.getElementById("comment").value;
    register_user = document.getElementById("register_user").checked;
    //alert("register" + register_user);
    var errorexist;
    // alert("isLetter(firstname)="+isLetter(firstname));
    if ((isLetter(firstname) === false) || (goodLengthString(firstname, 5) === false)) {
        alert("your firstname is wrong");
        errorexist = 1;
    }
    if ((isLetter(secondname) === false) || (goodLengthString(secondname, 5) === false)) {
        alert("your secondname is wrong");
        errorexist = 1;
    }
    if (register_user === true) {
       // alert("99");
        username = document.getElementById("username").value;
        //alert("username" + username);

        //var x=verifyusername(username);
       // alert("x="+x);
        if (verifyusername(username) === false) {
            alert("your register username is wrong");
            errorexist = 1;
        }
    }
    if ((isNumber(phone) === false) || (goodLengthNumber(phone, 10) === false)) {
        alert("your phone is wrong")
        errorexist = 1;
    }

    if ((goodLengthString(comments, 20)) === false) {
        alert("your comment is too long");
    }
    if (isGoodEmail(email) === false) {
        alert("your email is wrong");
        errorexist = 1;
    }
    if (errorexist === 1) {
        alert("please input your information again");
        window.location.href='feedback_page.html';

    } else {

        window.location.href='feedback_page_information_review.html';
    }

}

function isLetter(str) {
    var result;
    result = false;
    //alert("isLetter function length" + str.length);
    //alert("str ="+str);
    for (i = 0; i < str.length; i++) {
        var asc = str.charCodeAt(i);
        //alert("i" + i);
        if ((asc >= 65 && asc <= 90) || (asc >= 97 && asc <= 122)) {
            //alert("result is true");
            result = true;
        }
    }
    //alert("isLetter function result=" + result);
    return result;
}


function isNumber(num) {
    var len = num.length;
    result = true;
    for (i = 0; i < len; i++) {
        var asc = num.charCodeAt(i);
        if ((asc > 57) || (asc < 48)) {
            result = false;
        }
    }
    // alert("isNumber function result="+result);
    return result;
}

function goodLengthString(str, required_length) {
    var result;
    result = true;
    // alert("str.length="+str.length);
    //alert("reuired_lenght="+required_length);
    if (str.length > required_length) {
        alert("your input is too long")
        result = false;
    }
    //alert("goodlength function result="+result);
    return result;
}

function goodLengthNumber(num, required_length) {
    var result;
    result = true;
    required_length--;
    //alert("require_length"+required_length);
    num2 = Math.pow(10, required_length);
    // alert("num="+num2);
    var input = num/ num2;
    //alert("input"+input);
    if (input < 1 ||input >=10) {
        result = false;
    }
    //alert("goodlengthnumber function result="+result);
    return result;
}

function isGoodEmail(str) {
    var result = true;
    var position1 = str.indexOf("@");
    var position2 = str.indexOf(".");
    if ((position1 === -1) || (position2 === -1) || (position2 < position1)) {
        result = false;
    }
    return result;
}


function verifyusername(username) {
    var result;
    result = true;

    if ((isLetter(username) === false) || (goodLengthString(username, 5) === false)) {
        result = false;
    }
    return result;
}


// added by Felix
// create a function so that we can add an onclick function to the return button on the feedback_information page that sends us to the recipe homepage
function backButtonHome() {
    window.location.href = "../Recipe_Homepage/recipe_homepage.html";
}