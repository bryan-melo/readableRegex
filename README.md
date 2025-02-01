# Readable Regex API

This API provides endpoints for performing common string manipulation tasks, specifically removing non-numeric and non-letter characters from input strings. It's built using Express.js and designed to encapsulate the underlying regular expression logic for improved readability and maintainability.

## Summary

The API offers two primary functions: removing non-numeric characters and removing non-letter characters from a given string. These functions are accessible via POST requests to dedicated endpoints. The API accepts a JSON payload containing the input string and returns a JSON response with the modified string.

## Benefits

*   **Improved Readability:** Complex regular expressions are hidden behind simple function calls, making the code much easier to understand. Instead of seeing cryptic regex scattered throughout the application, developers interact with clear and descriptive function names.

*   **Enhanced Maintainability:** If the regex logic needs to be updated (e.g., to support different character sets or handle edge cases), changes only need to be made in one central location. This significantly reduces the risk of errors and makes maintenance much simpler.

*   **Increased Reusability:** The API can be used by multiple parts of the same application or even by entirely different applications. This promotes code reuse and reduces redundancy.

*   **Simplified Testing:** The core string manipulation functions are easily testable in isolation, leading to more robust and reliable code.

*   **Abstraction:** The API provides a layer of abstraction, shielding developers from the complexities of regular expressions. Clients of the API don't need to understand the underlying regex to use the string manipulation functions.

## Usage (Example)

Clients interact with the API by sending POST requests with a JSON payload containing the input string. The API returns a JSON response with the modified string. See the individual endpoint documentation (if needed) for specific request and response formats.

## Running the API

```bash
node app.js  // Or npm start