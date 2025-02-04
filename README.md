# Readable Regex API

This API provides endpoints for performing common string manipulation tasks, specifically removing non-numeric and non-letter characters from input strings. It's built using Express.js and designed to encapsulate the underlying regular expression logic for improved readability and maintainability.

## Summary

The API offers two primary functions: removing non-numeric characters and removing non-letter characters from a given string. These functions are accessible via GET requests to dedicated endpoints. The API accepts a JSON payload containing the input string and returns a JSON response with the modified string.

## Benefits

*   **Improved Readability:** Complex regular expressions are hidden behind simple function calls, making the code much easier to understand. Instead of seeing cryptic regex scattered throughout the application, developers interact with clear and descriptive function names.

*   **Enhanced Maintainability:** If the regex logic needs to be updated (e.g., to support different character sets or handle edge cases), changes only need to be made in one central location. This significantly reduces the risk of errors and makes maintenance much simpler.

*   **Increased Reusability:** The API can be used by multiple parts of the same application or even by entirely different applications. This promotes code reuse and reduces redundancy.

*   **Simplified Testing:** The core string manipulation functions are easily testable in isolation, leading to more robust and reliable code.

*   **Abstraction:** The API provides a layer of abstraction, shielding developers from the complexities of regular expressions. Clients of the API don't need to understand the underlying regex to use the string manipulation functions.

## Usage (Example)

Clients interact with the API by sending GET requests with a JSON payload containing the input string. The API returns a JSON response with the modified string. See the individual endpoint documentation (if needed) for specific request and response formats.

Sample GET Request 
`https://readable-regex-8d81b79167bf.herokuapp.com/api/onlyNumeric?inputString=a1234c321`

If using special characters for the inputString you have to encode the entire value to ensure the payload is passed properly

```
        async function getResponse() {
            const baseUrl = 'https://readable-regex-8d81b79167bf.herokuapp.com/api/'
            const inputString = "%8&3a"
            const encodedInputString = encodeURIComponent(inputString)
            try {
                const response = await fetch(baseUrl + "onlyNumeric?inputString=" + encodedInputString)
                const json = await response.json()
                const transformedString = json.result
                console.log(transformedString)
                // output 83
                
            }
            catch(exception) {
                throw exception
            }
        }
```

## How to Contribute

1. `git clone` the project locally
2. Create a branch off of the `main` branch and run `git checkout` on that branch
3. Change the base URL locally to `localhost` in the client-side app or when testing to make sure you are testing against the local api
4. Add your changes and validate they are working locally
5. Open a PR to the main branch containing the value of the PR, any screenshots or video recordings to demonstrate the value and any tests that can be added (unit, feature, proof of manual testing)
6. A repo admin/moderator will review the PR along with other contributors. If there is feedback, please address it, commit any changes, and reach out for a rereview.
7. Once approved a repo admin/moderator will merge the PR to main, deploying the service to production

## Running the API

Using `node`
```bash
node index.js  // Or npm start
```
Or if you want your backend changes to refresh automatically you can use `nodemon`
```bash
nodemon index.js
```

## Support

Please feel free to contact drewg2009@gmail.com for information about contributing, troubleshooting, or other concerns.

## Deployment

Deployed on Heroku Server. Once successfully merged to main branch, auto-deployment is made. 
