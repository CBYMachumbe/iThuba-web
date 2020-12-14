function makeBase64(inputField) 
{
    var file = inputField.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () 
    {
        var base64 = reader.result;
        if (inputField.getAttribute("data-fileSelect") === 'img') {
            //update locale version of profile picture
            localStorage.setItem('profilePicture', base64);
        }

        inputField.setAttribute("data-fileValue", base64);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}