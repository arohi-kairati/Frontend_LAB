let age =  prompt("Enter your age:");
age = Number(age);

if (age > 0 && Number.isFinite(age) && Number.isInteger(age)) {
    let result = age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";

    alert(result);

    console.log("Before document.write");
    document.write("<h3>Age: " + age + "</h3>");
    document.write("<h4>" + result + "</h4>");

} else {
    alert("Please enter a valid age.");

    document.write("<h3>Invalid age entered!</h3>");
}
