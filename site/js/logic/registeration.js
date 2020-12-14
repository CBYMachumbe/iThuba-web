var currentTab = 0; // first tab is 0
showTab(currentTab); // display the currentTab
var tabInc = 0;
var userType = "";

$(document).ready(function () {

    $('#sign_student').click(function (){
        $('#buttonModal').modal('hide');
        $('#registerationModalLabel').text('register as a student');
        $('#tutorDoccies').css('visibility','collapse');
        tabInc = 9.09;
        userType = "student";
    });

    $('#sign_tutor').click(function (){
        $('#buttonModal').modal('hide');
        $('#registerationModalLabel').text('register as a tutor');
        $('#student_cnr').css('visibility','collapse');
        tabInc = 8.6;
        userType = "tutor";
    });

    $('#sign_student_').click(function (){

        $('#registerationModalLabel').text('register as a student');
        $('#tutorDoccies').css('visibility','collapse');
        tabInc = 9.09;
        userType = "student";
    });

    $('#sign_tutor_').click(function (){

        $('#registerationModalLabel').text('register as a tutor');
        $('#student_cnr').css('visibility','collapse');
        tabInc = 8.6;
        userType = "tutor";
    });

    $('.custom-file-input').on('change',function(){
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        

    });
});

function showTab(n){
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if(n == 0)
    {
        document.getElementById("prevBtn").style.display = "none";
    }
    else
    {
        document.getElementById("prevBtn").style.display = "inline";
        if(n == 3)
        {
            document.getElementById("nextBtn").innerHTML = "activate account";
            document.getElementById("prevBtn").style.display = "none";

            //addToProgress(50);
        }
        else if(n == 2)
        {
            document.getElementById("nextBtn").innerHTML = "sign up";
            //addToProgress(10);

        }
        else
        {
            document.getElementById("nextBtn").innerHTML = "next";
            //addToProgress(10);
        }
    }
}

function nextPrev(n){
    var x = document.getElementsByClassName("tab");
    if(n == 1 && !validForm())
    { return false;}

    x[currentTab].style.display = "none";
    currentTab += n;

    if(currentTab >= x.length){
        
        addToProgress(40);
        showTab(--currentTab);

        // have an if statement checking the activation code
        // if its incorrect display message, else close modal & redirect to request page

        var testBool = true;

        if(testBool)
        {
            // success message
            document.getElementById('msg').style.visibility = 'visible';
            
            // redirect after 3 seconds, give user time to read message
            setTimeout(function(){
                $('#regModal').modal('hide');
                window.location.replace("request.html");
            },3000);
        }
        else
        {
            // error message
            document.getElementById('msg').style.visibility = 'visible';
        }
    }
    else{
        showTab(currentTab);

    }
    
}

function addToProgress(){ // updates progressbar percentage by given int

    var prograssBar = $('#progress');
    oldValue = parseFloat(prograssBar.attr('aria-valuenow'));
    newValue = oldValue + tabInc;
    
    if(newValue >= 80){ // form is fully filled in
        prograssBar.removeClass('bg-warning');
        prograssBar.addClass('bg-success');
    }
    else if(newValue >= 60 && newValue < 80){
        prograssBar.removeClass('bg-primary');
        prograssBar.addClass('bg-warning');
    }

    prograssBar.attr('aria-valuenow', newValue).css('width', newValue + '%');
}

function validForm(){
    return true;
}

function closeLoginModal(){
    $('#loginModal').modal('hide');
}