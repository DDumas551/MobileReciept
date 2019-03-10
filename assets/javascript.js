let employees;
let date;
let firstTwoHours = 0;
let additionalHours = 0;
let hourlyRate = 0;
let hoursTotal = 0;
let truckRate = 0;
let supplies = 0;
let prepaid = 0;
let sub = 0;
let subtotal = 0;
// let subSub = 0;


$("#submitBtn").on("click", function() {
    employees = $("#names").val();
    date = $("#todaysDate").val();
    firstTwoHours = $("#firstTwoHours").val();
    additionalHours = $("#additionalHours").val();
    hourlyRate = $("#hourlyRate").val();
    if(additionalHours > 0) {
        hoursTotal = parseInt(additionalHours * hourlyRate);
    }else{
        hoursTotal = 0;
    }
    truckRate = $("#truckRate").val();
    supplies = $("#supplies").val();
    prepaid = $("#prepaid").val();
    sub = parseInt(hoursTotal) + parseInt(truckRate) + parseInt(supplies);
    subtotal =  parseInt(sub - prepaid);
    console.log("sub " + sub);
    console.log("prepaid " + prepaid);
    console.log("subtotal" + subtotal);

    $(".eePTag").append("Workers: " + employees);
    $(".datePTag").append("Today's Date: " + date);
    $(".firstTwoHoursPTag").append("First Two Hours: $" + firstTwoHours);
    $(".hoursPTag").append("Aditional Hours: " + additionalHours);
    $(".ratePTag").append("Hourly Rate: $" + hourlyRate);
    $(".hoursTotalPTag").append("Labor Total: $" + hoursTotal);
    $(".truckPtag").append("Truck Rate: $" + truckRate);
    $(".suppliesPtag").append("Supplies Cost: $" + supplies);
    $(".prepaidPtag").append("Prepaid Amt: $" + prepaid);
    $(".subtotal").append("Total: $" + (parseInt(subtotal) + parseInt(firstTwoHours)));

});