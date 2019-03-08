let employees;
let date;
let hours = 0;
let hourlyRate = 0;
let hoursTotal = 0;
let truckRate = 0;
let supplies = 0;
let prepaid = 0;
let subtotal = 0;


$("#submitBtn").on("click", function() {
    employees = $("#names").val();
    date = $("#todaysDate").val();
    hours = $("#hours").val();
    hourlyRate = $("#hourlyRate").val();
    hoursTotal = hours * hourlyRate;
    truckRate = $("#truckRate").val();
    supplies = $("#supplies").val();
    prepaid = $("#prepaid").val();
    // subtotal = parseInt(hoursTotal) + parseInt(truckRate) + parseInt(supplies) + parseInt(-prepaid);

    $(".eePTag").append("Workers: " + employees);
    $(".datePTag").append("Today's Date: " + date);
    $(".hoursPTag").append("Hours worked: " + hours);
    $(".ratePTag").append("Hourly Rate: $" + hourlyRate);
    $(".hoursTotalPTag").append("Labor Total: $" + hoursTotal);
    $(".truckPtag").append("Truck Rate: $" + truckRate);
    $(".suppliesPtag").append("Supplies Cost: $" + supplies);

    $(".subtotal").append("Job Subtotal: $" + 5);
    console.log(hoursTotal);
    console.log(subtotal);
});