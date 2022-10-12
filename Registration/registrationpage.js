
//function to check validity of all related information
function verifyInfo() {
    let registerUser = document.getElementById("user-id").value;
    let registerPass = document.getElementById("password-id").value;
    let registerPNumber = document.getElementById("phone-number-id").value;

    //Username input check
    if (registerUser.length < 1) {
        alert("Please enter a valid username.");
        return false;
    }
    else if (registerUser.length > 8) {
        alert(`${registerUser} is more than eight characters.`);
        return false;
    }
    //Password input check
    else if (registerPass = "" || registerPass.length < 5) {
        alert("That password is incorrect.");
        return false;
    }
    //Phone Number check
    else if (registerPNumber.length > 10 || registerPNumber.length < 1) {
        alert("That phone number is incorrect");
        return false;
    }
    else {
        return true;
    }
}

function textareaEnable() {
    document.addEventListener("click", () => {
        document.getElementById("other-textarea").disabled = false;
        document.getElementById("other-textarea").style.backgroundColor = "white";
    })
}

