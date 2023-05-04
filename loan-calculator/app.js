//add event listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //hide results
  document.getElementById("results").style.display = "none";
  //show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  //   ui variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //  compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    document.getElementById("loading").style.display = "none";
    document.getElementById("results").style.display = "block";
  } else {
    showError("Please check your numbers");
  }
}

//error function
function showError(error) {
  document.getElementById("loading").style.display = "none";
  document.getElementById("results").style.display = "none";

  const errorDiv = document.createElement("div");
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  //adding a class to the newly created div
  errorDiv.className = "alert alert-danger";
  //creating a text node and appending to the div
  errorDiv.appendChild(document.createTextNode(error));
  //insert error above heading
  card.insertBefore(errorDiv, heading);
  //clear error call using settimesout
  setTimeout(clearError, 3000);
}

//clear error after three seconds
function clearError() {
  document.querySelector(".alert").remove();
}
