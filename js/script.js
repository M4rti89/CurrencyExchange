{
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputElement = document.querySelector(".js-input");
            const currencyElement = document.querySelector(".js-currency");

            displayResult(calculate(currencyElement.value, inputElement.value), currencyElement.value);
        });
    }

    const displayResult = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = `${result.toFixed(2)} ${currency}`;
    }

    const calculate = (currency, amount) => {

        const USD = 4.46;
        const EUR = 4.68;
        const GBP = 5.42;
        const CHF = 4.73;

        switch (currency) {
            case "USD":
                return amount / USD
                break;

            case "EUR":
                return amount / EUR
                break;

            case "GBP":
                return amount / GBP
                break;

            case "CHF":
                return amount / CHF
        }
    }

    init();
}