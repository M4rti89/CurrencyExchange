let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let USD = 4.46;
let EUR = 4.68;
let GBP = 5.42;
let CHF = 4.73;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputElement = document.querySelector(".js-input");
    let currencyElement = document.querySelector(".js-currency");

    let amount = inputElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / USD
            break;

        case "EUR":
            result = amount / EUR
            break;

        case "GBP":
            result = amount / GBP
            break;

        case "CHF":
            result = amount / CHF
    }

    resultElement.value = `${result.toFixed(2)} ${currency}`;

});