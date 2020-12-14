$(document).ready(function () {

    var sessions = "";
    for(var i = 0; i < 5; i++)
    {
        sessions += makeSessionText('module name ' + i, '0'+ i + ':00', i + '-Nov-2020', i + '0.00', '660' + i + ' Orange Farm dddddddddddddddddddddddd', 5);

    }
    
    document.getElementById('sessions').innerHTML = sessions;
});


function makeSessionText(moduleName, time, date, cost, location, nPeriods)
{
    var session = '<div class="col-lg-6 session-card-spacing">';
    session += '<div class="card"><div class="card-header">';
    session += '<strong class="card-title">'+ moduleName +' tutorial</strong>';
    session += '</div><div class="card-body small"><div class="row">';
    session += '<p class="text-center">';
    session += '<div class="col-lg-4 month-choose" data-toggle="tooltip" title="begin session"><span style="color: green;"><i class="fa fa-play fa-2x" style="margin-left:50%;"></i></span></div>';
    session += '<div class="col-lg-4 month-choose" data-toggle="tooltip" title="request for date/time change"><span style="color: blue;"><i class="fa fa-edit fa-2x" style="margin-left:50%;"></i></span></div>';
    session += '<div class="col-lg-4 month-choose" data-toggle="tooltip" title="cancel session"><span style="color: red;"><i class="fa fa-times fa-2x" style="margin-left:50%;"></i></span></div>';
    session += '</p></div><br/><div class="row"><p class="text-center">';
    session += '<div class="col-lg-4 month-choose" data-toggle="tooltip" title="session start time"><span class="next-line" style="color: brown;"><i class="fa fa-clock-o fa-lg" style="margin-left:20%;"></i></span>&nbsp;&nbsp;'+ time +'</div>';
    session += '<div class="col-lg-4 month-choose" data-toggle="tooltip" title="session date"><span class="next-line" style="color: orange;"><i class="fa fa-calendar fa-lg" style="margin-left:30%;"></i></span>'+ date +'</div>';
    session += '<div class="col-lg-4 month-choose text-center" data-toggle="tooltip" title="session cost"><span class="next-line" style="color: #006400;"><i class="fa fa-money fa-lg"></i></span>R '+ cost +'</div></p>';
    session += '<p class="text-center">';
    session += '<div class="col month-choose" data-toggle="tooltip" title="session location"><span class="next-line" style="color: red;"><i class="fa fa-map-marker fa-lg" style="margin-left:50%;"></i></span>'+ location +'</div>';
    session += '</p>';
    session += '</div></div></div></div></div>';
    
    return session;
}