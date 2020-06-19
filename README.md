# MakersBNB
### [Team](https://github.com/sofyloafy/MakersBnb#team) - [Getting set up](https://github.com/sofyloafy/MakersBnb#gettingsetup) - [Spec](https://github.com/sofyloafy/MakersBnb#spec) - [User Stories](https://github.com/sofyloafy/MakersBnb#userstories) - [Models](https://github.com/sofyloafy/MakersBnb#models)

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
We would like a web application that allows users to list spaces they have available, and to hire spaces for the night.

Headline specifications:
* Any signed-up user can list a new space.
* Users can list multiple spaces.
* Users should be able to name their space, provide a short description of the space, and a price per night.
* Users should be able to offer a range of dates where their space is available.
* Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.
* Nights for which a space has already been booked should not be available for users to book that space.
* Until a user has confirmed a booking request, that space can still be booked for that night.


## User Stories

```
As a signed up host, So I can make good use of an extra room, 
I would like to be able to list it as a new space.
```

```
As a signed up host, So I can personalize each listing, 
I would like to be able to provide a name, a short description,
and a price per night to my spaces.
```

## Models
We decided to model our approach for the MVP, and the domain model below 
demostrates what we would have liked to achieve, had time permitted.
The responsibilities have been shared amongst the class in order to comply with SRP.

[![](./images/Initial_MVP_BNB.png)


The diagram below demonstrates the MVC overview of the data flow for viewing properties:
![](./images/MVC.png)

In addition, we modelled the user experience through the page, and the landing log in page that welcomes them.
Had time permitted, we would have had a login page with a user database, which then leads them to a personalised homepage, displaying properties, with an option to list a further property. Modelled below:
![](./images/userX.png)
