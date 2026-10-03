
const startBtn = document.getElementById("startBtn");
const resultBox = document.getElementById("result");

function evaluateScore(score) {
  if (score >= 90 && score <= 100) {
    return "Excellent";
  } else if (score >= 75 && score < 90) {
    return "Passed";
  } else if (score > 0 && score < 75) {
    return "Failed";
  } else {
    return "Invalid score";
  }
}


function showResult(message, cssClass) {
  resultBox.className = "result " + cssClass;
  resultBox.innerHTML = message;
}


function startProgram() {
  
  alert("Welcome to the Score Checker!");


  let name = prompt("Enter your name:");

  
  if (name === null || name.trim() === "") {
    showResult("<p>Invalid input: name is required.</p>", "invalid");
    return;
  }
  
  name = name.trim();


  let scoreInput = prompt("Enter your score (1 - 100):");

  
  if (scoreInput === null || scoreInput.trim() === "") {
    showResult("<p>Invalid input: score is required.</p>", "invalid");
    return;
  }

  let score = Number(scoreInput);

  
  if (isNaN(score)) {
    showResult("<p>Invalid score: please enter numbers only.</p>", "invalid");
    return;
  }

  
  if (score === 0) {
    showResult("<p>Invalid score: zero is not allowed.</p>", "invalid");
    return;
  }

  
  if (score < 0) {
    showResult("<p>Invalid score: negative numbers are not allowed.</p>", "invalid");
    return;
  }

  if (score > 100) {
    showResult("<p>Invalid score: the highest score is 100.</p>", "invalid");
    return;
  }

  let proceed = confirm("Hi " + name + "! Do you want to see your result?");

  if (proceed === false) {
    showResult("<p>You cancelled. No result was shown.</p>", "invalid");
    return;
  }

  let remark = evaluateScore(score);

  let cssClass = remark.toLowerCase();
  if (remark === "Invalid score") {
    cssClass = "invalid";
  }

  showResult(
    "<p><strong>Name:</strong> " + name + "</p>" +
    "<p><strong>Score:</strong> " + score + "</p>" +
    "<p><strong>Remark:</strong> " + remark + "</p>",
    cssClass
  );
}

startBtn.addEventListener("click", startProgram);