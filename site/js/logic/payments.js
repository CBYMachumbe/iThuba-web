const months = ['#JAN', '#FEB', '#MAR', '#APR', '#MAY', '#JUN', '#JUL', '#AUG', '#SEP', '#OCT', '#NOV', '#DEC']; // month id array
const linkBasePage = ""; // potential page the invoice is going to be opened in

$(document).ready(function () {

    var date = new Date();
    var dateIndex = date.getMonth();
    $(months[dateIndex]).addClass("bg-primary text-white");

    var month = date.toLocaleString('default', { month: 'long' }).toLowerCase();
    
    $('#reportLink').text(month + " invoice"); // link text update
    $('#month').text(month); // invisible month update

    //update link
    updateInvoiceLink(linkBasePage + "?month=" + month + "&year=" + date.getFullYear());

});

function changeHighlight(monthID){

    for(var i = 0; i < 12; i++){
        $(months[i]).removeClass("bg-primary text-white");
        $(months[i]).addClass("bg-light text-dark-grey");
    }

    const selectedDate = new Date("25 " + monthID + " 2015"); // dummy date
    var month = selectedDate.toLocaleString('default', { month: 'long' }).toLowerCase(); // getting month full name for link display
    
    $('#reportLink').text(month + " invoice"); // setting the link text
    monthID = '#' + monthID;

    // block highlight display
    $(monthID).removeClass("bg-light");
    $(monthID).addClass("bg-primary text-white");

    updateInvoiceLink(linkBasePage + "?month=" + month + "&year=" + $('#year').text()); // link text update
    $('#month').text(month); // invisible month update

}

/**
 * conditions refer to 2020 as year of deployment, we can't back to a year the 
 * system didnt exist & we can check future invoices
 */

function yearInc(){
    var year = parseInt($('#year').text());

    var date = new Date();
    var dateYear = date.getFullYear();
    year++;
    if(year > dateYear)
    {year = dateYear}
    else{}
    $('#year').text(year);
    updateInvoiceLink(linkBasePage + "?month=" + $('#month').text() + "&year=" + $('#year').text());
}

function yearDec(){
    var year = parseInt($('#year').text());
    if(year <= 2020){}
    else{year--;}
    $('#year').text(year);
    updateInvoiceLink(linkBasePage + "?month=" + $('#month').text() + "&year=" + $('#year').text());
}

function updateInvoiceLink(link)
{
    $("#reportLink").attr("href", link); // used to change the link
}