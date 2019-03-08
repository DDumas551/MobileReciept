let jobStart;
let hourlyRate;
let truckRate;
let supplies;


$("#submitBtn").on("click", function() {
    jobStart = $("#jobStart").val();
    hourlyRate = $("#hourlyRate").val();
    truckRate = $("#truckRate").val();
    supplies = $("#supplies").val();  
    console.log(jobStart);
});