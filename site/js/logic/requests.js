var periodPrice = 45.64;
$(document).ready(function () {

    // tooltip config: trigger can be hover|focus, placement can be up|down|left|right, title is the text that needs to be displaced
    $('#sessionPeriods').tooltip({
        'trigger': 'focus', 'placement': 'right',
        'title': 'R ' + periodPrice.toFixed(2) + ' per session'
    });

    const params = new URLSearchParams(window.location.search)
    if (params.has('active')) {
        var type = params.get('active');
        if (type.localeCompare("request") == 0) {
            console.log('we requesting baby');
        }
    }

    document.getElementById('modules').innerHTML = '<option value="" disabled selected>select module</option><option value="">Signal Processing</option>';

    $("#location_select").click(function () {
        document.getElementById('loc_box').style.visibility = "visible";
        document.getElementById('place').value = document.getElementById('address').value;
        $('#locationModal').modal('hide');
    });

    //checkbox event listener
    $('#prevTutorsCheck').click(function () {
        var prevTutorsDiv = document.getElementById('previousTutors');
        var tutorSelect = document.getElementById('tutors');
        if ($('#prevTutorsCheck').is(':checked')) {

            prevTutorsDiv.style.visibility = 'visible';
            tutorSelect.innerHTML = '<option value="" disabled selected>select tutor</option><option value="">Machumbe Muzonde</option>';
        }
        else {
            prevTutorsDiv.style.visibility = 'collapse';
        }
    });

    // request submission event listener
    $('#submit').click(function () {
        if(submitRequest())
        {
            clearControls(); // clears controls & ready ups for new request
            $('.toast').toast('show'); // show confirmation toast
        }
        
    });
});

function submitRequest(){
    // todo 
    return true;
}

function updatePrice(txtPeriods) {
    var txtCost = document.getElementById('sessionCost');

    if (txtPeriods.value == '') {
        txtCost.innerText = "session cost: R 0.00";
    }
    else {
        var periods = parseInt(txtPeriods.value);
        txtCost.innerText = "session cost: R " + (periods * periodPrice).toFixed(2);
    }
}

function clearControls() {

    document.getElementById('modules').selectedIndex = "0";
    document.getElementById('date').value = "";
    document.getElementById('time').value = "";
    document.getElementById('address').value = "";
    document.getElementById('sessionPeriods').value = "";
    document.getElementById('sessionCost').innerText = "session cost: R 0.00";
    document.getElementById('previousTutors').style.visibility = 'collapse';
    document.getElementById('loc_box').style.visibility = "collapse";
    $("#prevTutorsCheck").prop("checked", false); // uncheck checkbox

}
