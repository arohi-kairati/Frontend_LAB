let date =  prompt("Enter your date for entry permission:");
date = Number(date);

if (date > 0 && date < 32 && Number.isFinite(date) && Number.isInteger(date)) {
    let result = date >= 11 && date <= 19 ? "You are allowed to enter the University to see the goddess." : "You are not allowed to enter the University.";

    alert(result);

    console.log("Before document.write");
    document.write("<h3>Date: " + date + " of October</h3>");
    document.write("<h4>" + result + "</h4>");

} else {
    alert("Please enter a valid date.");

    document.write("<h3>Invalid date entered!</h3>");
}
