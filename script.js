function calculate() {
    var amountInvestedInput = document.getElementById("totalInvestment");
    var rateOfReturnInput = document.getElementById("returnrate");
    var timePeriodInput = document.getElementById("duration");

    var amountInvested = parseFloat(amountInvestedInput.value);
    var rateOfReturn = parseFloat(rateOfReturnInput.value);
    var timePeriod = parseInt(timePeriodInput.value);

    // Regular expressions for validation
    var amountPattern = /^[0-9]{1,7}$/; // Accept numbers from 0 to 10,000,000
    var ratePattern = /^([1-9]|1[0-9]|2[0-9]|30)(\.\d{0,1})?$/; // Accept 1-30 including decimals up to 1 point
    var timePattern = /^[1-9]|[1-3][0-9]|40$/; // Accept integers from 1 to 40

    // Error message element
    var errorMessage = document.getElementById("error-message");

    if (!amountPattern.test(amountInvestedInput.value) &&
        !ratePattern.test(rateOfReturnInput.value) &&
        !timePattern.test(timePeriodInput.value)) {
        errorMessage.innerHTML = '<div><i class="fas fa-exclamation-circle"></i> Please enter valid input </div>';
        errorMessage.style.display = "block";
        return;
    }
    
    if (!amountPattern.test(amountInvestedInput.value) &&
        !ratePattern.test(rateOfReturnInput.value) ) {
        errorMessage.innerHTML = '<div><i class="fas fa-exclamation-circle"></i> Please enter valid input </div>';
        errorMessage.style.display = "block";
        return;
    }
    
    if (!amountPattern.test(amountInvestedInput.value) &&
        !timePattern.test(timePeriodInput.value)) {
        errorMessage.innerHTML = '<div><i class="fas fa-exclamation-circle"></i> Please enter valid input</div>';
        errorMessage.style.display = "block";
        return;
    }
    
    if (!ratePattern.test(rateOfReturnInput.value) &&
        !timePattern.test(timePeriodInput.value)) {
        errorMessage.innerHTML = '<div><i class="fas fa-exclamation-circle"></i> Please enter valid input</div>';
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";

    if (!amountPattern.test(amountInvestedInput.value)) {
        errorMessage.innerHTML = '<div><i class="fas fa-exclamation-circle"></i> Please enter valid amount</div>';
        errorMessage.style.display = "block";
        return;
    }

    if (!ratePattern.test(rateOfReturnInput.value)) {
        errorMessage.innerHTML = '<div><i class="fas fa-exclamation-circle"></i> Please enter valid percentage</div>';
        errorMessage.style.display = "block";
        return;
    }

    if (!timePattern.test(timePeriodInput.value)) {
        errorMessage.innerHTML = '<div><i class="fas fa-exclamation-circle"></i> Please enter valid time period</div>';
        errorMessage.style.display = "block";
        return;
    }

    var monthlyRate = rateOfReturn / 12 / 100;
    var months = timePeriod * 12;
    var futureValue = amountInvested * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

    var futureValue = Math.round(futureValue);
    var amountTotalInvested = amountInvested * months;

    document.getElementById("totalvalue").innerHTML = "₹" + " " + futureValue;
    document.getElementById("invested").innerHTML = "₹" + " " + amountTotalInvested;
    document.getElementById("returns").innerHTML = "₹" + " " + (futureValue - amountTotalInvested);
}
