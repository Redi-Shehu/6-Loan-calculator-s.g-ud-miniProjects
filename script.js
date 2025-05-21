const loanAmountDOM = document.querySelector("#amount");
const interestDOM = document.querySelector("#interest");
const monthsDOM = document.querySelector("#months");
const paymentDOM = document.querySelector("#payment");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    // console.log(e);
    // console.log(input.value);
    // console.log(e.target.value);
    const loanAmountValue = loanAmountDOM.value;
    const interestRateValue = interestDOM.value;
    const monthsValue = monthsDOM.value;
    // console.log(loanAmountValue);
    // console.log(interestRateValue);
    // console.log(monthsValue);
    const interest =
      (loanAmountValue * (interestRateValue * 0.01)) / monthsValue;
    const monthlyPayment = loanAmountValue / monthsValue + interest;
    console.log(interest.toFixed(2));
    console.log(monthlyPayment.toFixed(2));
    paymentDOM.textContent = monthlyPayment.toFixed(2);
  });
});
