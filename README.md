# Testing 24mx pages with Cypress
This project uses Cypress to test some basic functionalities on pages:
* [www.24mx.ie](www.24mx.ie)
* [www.24mx.pl](www.24mx.pl)

## How to run?

To run this test you need to install [Cypress](https://www.cypress.io/)
and you need additional package [cypress-xpath](https://www.npmjs.com/package/cypress-xpath)

## Installation

Run this in the project folder:
```bash
npm install cypress
```
Additional component required - [cypress-xpath](https://www.npmjs.com/package/cypress-xpath):
```bash
npm install -D cypress-xpath
```

## Usage

Download and go to the project folder and run this command:
```bash
npx cypress open
```
For headless mode use:

```bash
npx cypress run --browser chrome 
```
## Test coverage
- Fast checkout
- Check logo
- Shopping cart edit 
- Product details page
- Popups with benefits
- Recently viewed
 
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)