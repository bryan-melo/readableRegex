module.exports = class ValidationFunctions {
  // Function to remove all non-numeric characters
  static onlyNumbers(str) {
    return str.replace(/[^0-9]/g, '');
  }

  // Function to remove all non-letter characters (including spaces and punctuation)
  static onlyLetters(str) {
    return str.replace(/[^a-zA-Z]/g, '');
  }

  static onlySpecialCharacters(str) {
    return str.replace(/[a-zA-Z0-9\s]/g, ''); // Keep only special characters
  }

  static isEmailAddress(str) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
  }

  // Function to exclude specific characters
  static excludeTheseCharacters(inputString, excludeChars) {
    const regex = new RegExp(`[${excludeChars}]`, "g");
    return inputString.replace(regex, "");
  }
  
    static isPhoneNumber(str) {
        // A basic phone number regex (you might need to adjust it for your specific needs)
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/im;
        return phoneRegex.test(str);
    }

    static isAlphaNumeric(str) {
        const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
        return alphaNumericRegex.test(str);
    }

    static isInteger(str) {
        return /^-?\d+$/.test(str);
    }

    static isLowercase(str) {
        return /^[a-z]+$/g.test(str);
    }

    static isDecimal(str) {
      // Allowed decimal: 23.45; 34.; .45; -273.15; -42.; -.45;
      const isDecimalRegex = /^[+-]?((\d+(\.\d*))|(\.\d+))$/;
      return isDecimalRegex.test(str);
   }
}
