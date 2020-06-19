# MakersBNB
### [Team](https://github.com/sofyloafy/MakersBnb#team) - [Getting set up](https://github.com/sofyloafy/MakersBnb#gettingsetup) - [Spec](https://github.com/sofyloafy/MakersBnb#spec) - [User Stories](https://github.com/sofyloafy/MakersBnb#userstories)

## Team
* [Sophie Brown](https://github.com/sofyloafy)
* [Victor Vallet](https://github.com/victorvallet)
* [Joshua Brook](https://github.com/joshuaabrookuk)
* [Benedetta Arinci](https://github.com/benearinci)

## Getting set up
First, clone this repository and ensure you have node.js and npm installed. Then:

```
- Install jest package: $ npm install --save-dev jest
- Install dontenv package: $ npm install dotenv
- Install bodyParser package: $ npm install body-parser
- Change the user in ./database/queries to your own username
- Launch the server: $ node server.js
- Navigate to browser and open at 'http://localhost:4000/'
- Run tests: $ npm test
```

To setup the database, connect to psql and run the following command:
```bash
CREATE DATABASE makers_bnb;
```
To setup the test database, connect to psql and run the following command:
```bash
CREATE DATABASE test_makers_bnb;
```

To set up the table, navigate to your databases and run the following command:
```bash
CREATE TABLE properties;
```


## Spec
