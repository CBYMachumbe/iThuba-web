var _validImageExtensions = [".jpg", ".jpeg", ".png"];

function ValidateImageExt(oInput) {
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validImageExtensions.length; j++) {
                var sCurExtension = _validImageExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }

            if (!blnValid) {
                document.getElementById("image_message").innerHTML = "Invalid image format, please select .jpg, .jpeg or .png file";
                oInput.value = "";
                return false;
            }
        }
    }

    document.getElementById("image_message").innerHTML = "";
    return true;
}

var _validFileExtensions = [".pdf", ".docx"];

function ValidateFileExt(oInput, id) {
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }

            if (!blnValid) {
                document.getElementById(id).innerHTML = "Invalid file format, please select a .pdf or .docx file";
                oInput.value = "";
                return false;
            }
        }
    }
    document.getElementById(id).innerHTML = "";
    return true;
}

function changeSrc(url) {
    var frame = document.getElementById("portal");
    frame.src = url;
    return;
}

function openForm() {

    document.getElementById("myForm").style.display = "block";
    document.getElementById("blurry_content").style.display = "none";

}

function closeForm() {

    document.getElementById("myForm").style.display = "none";
    document.getElementById("blurry_content").style.display = "block";
}

function change() {

    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');

    } else {
        sidebar.classList.add('active');
    }

    console.log("Blur");
    return;

}

function expand(id) {

    var ul = document.getElementById(id);
    if (ul.getAttribute('area-expanded') == 'true') {
        ul.setAttribute('area-expanded', 'false');
    }
    else {
        ul.setAttribute('area-expanded', 'true');
    }

    console.log("Blur");
    return;
}

function validateRadios() {
    var police = document.getElementById("Police");
    alert(police.value);
    return;
}

function checkSoudyNumber(txtNum, id) {

    if (txtNum.value.length == 10) {
        var regex = /^0(6|7|8){1}[0-9]{1}[0-9]{7}$/;

        if (regex.test(txtNum.value) === false) {
            document.getElementById(id).innerText = 'please enter a valid south african number';
        }
        else {
            document.getElementById(id).innerText = '';
        }
    }

}

function checkPasswordStrength(txtPass) {

    if (txtPass.value.length < 6) {
        document.getElementById('pass_msg').innerText = 'minimum of 6 characters required for password & contain at least one special character';
    }
    else {
        document.getElementById('pass_msg').innerText = '';

        var strongRegex = /(?=.*[!@#$%^&*])/;

        if (strongRegex.test(txtPass.value) === false) {
        }
        else {
            document.getElementById('pass_msg').innerText = '';
        }

    }
}

function confirmPasswordCheck() {

    var pass = document.getElementById('pass').value;
    var c_pass = document.getElementById('c_pass').value;

    console.log(pass + " " + c_pass)

    if(c_pass.length >= 6)
    {
        if(pass !== c_pass)
        {
            $('#c_pass').css('background-color', '#ffcccb');
            document.getElementById('c_pass_msg').innerText = 'please match main password above';
        }
        else{

            $('#c_pass').css('background-color', '#90ee90');
            document.getElementById('c_pass_msg').innerText = '';
            setTimeout(function(){
                $('#c_pass').css('background-color', 'white');
                
            },1000);
        }

    }

    
    
}

function validateEmail(emailField, id) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) === false) {
        document.getElementById(id).innerText = 'please enter valid email address';
    }
    else {
        document.getElementById(id).innerText = '';
    }

}

function validateAge(txtAge, id) {

    if (txtAge.value < 14) {
        document.getElementById(id).innerText = 'please enter valid age';

    }
    else {
        document.getElementById(id).innerText = '';
    }
}
