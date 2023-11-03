const exchangeRates = {
    USD: 1,      // US Dollar
    EUR: 0.85,   // Euro
    GBP: 0.74,   // British Pound
    JPY: 113.37, // Japanese Yen
  };
  
  function convertCurrency(amount, fromCurrency, toCurrency) {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      return "Invalid currency codes";
    }
  
    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    return convertedAmount.toFixed(2); // Rounded to two decimal places
  }
  
  // Example usage:
  const amount = 100; // Amount to convert
  const fromCurrency = "USD"; // Source currency
  const toCurrency = "EUR";   // Target currency
  
  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
  console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
  