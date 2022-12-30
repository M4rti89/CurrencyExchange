{
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputElement = document.querySelector(".js-input");
            const currencyElement = document.querySelector(".js-currency");

            updateResultText(calculateResult(currencyElement.value, inputElement.value), currencyElement.value);
        });
    }

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.value = `${result.toFixed(2)} ${currency}`;
    }

    const calculateResult = (currency, amount) => {

        const USD = 4.46;
        const EUR = 4.68;
        const GBP = 5.42;
        const CHF = 4.73;

        switch (currency) {
            case "USD":
                return amount / USD

            case "EUR":
                return amount / EUR

            case "GBP":
                return amount / GBP

            case "CHF":
                return amount / CHF
        }
    }

    init();
}