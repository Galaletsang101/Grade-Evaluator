function evaluateGrade() {
    const marks = document.getElementById("marks").value;
    const result = document.getElementById("result");

    if (marks === "" || marks < 0 || marks > 100) {
        result.innerHTML = "Please enter valid marks between 0 and 100.";
        result.style.color = "red";
        return;
    }

    let grade;
    let feedback;

    if (marks >= 75) {
        grade = "A";
        feedback = "Excellent performance!";
    } 
    else if (marks >= 60) {
        grade = "B";
        feedback = "Very good job!";
    } 
    else if (marks >= 50) {
        grade = "C";
        feedback = "Good effort!";
    } 
    else if (marks >= 40) {
        grade = "D";
        feedback = "You passed, but improvement needed.";
    } 
    else {
        grade = "F";
        feedback = "You failed. Please try again.";
    }

    result.innerHTML = `Grade: ${grade} <br> ${feedback}`;
    result.style.color = "green";
}
