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

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cdEhvbWUgPHwtLSBVc2VyXG5cdEhvbWUgPHwtLSBQcm9wZXJ0eVxuXHRIb21lOiBsaXN0KHByb3BlcnR5KVxuXHRIb21lOiB2aWV3KGZlZWQpXG5cdGNsYXNzIFVzZXJ7XG5cdCAgICBcblx0XHRzaWduVXAoZW1haWwscGFzc3dvcmQsdXNlcm5hbWUpXG5cdFx0c2lnbkluKGVtYWlsLHBhc3N3b3JkKVxuXHR9XG5cdGNsYXNzIFByb3BlcnR5e1xuXHRcdHRpdGxlIFxuXHRcdGRlc2NyaXB0aW9uXG5cdFx0cHJpY2Vcblx0XHRsb2NhdGlvblxuXG5cdH1cblx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cdEhvbWUgPHwtLSBVc2VyXG5cdEhvbWUgPHwtLSBQcm9wZXJ0eVxuXHRIb21lOiBsaXN0KHByb3BlcnR5KVxuXHRIb21lOiB2aWV3KGZlZWQpXG5cdGNsYXNzIFVzZXJ7XG5cdCAgICBcblx0XHRzaWduVXAoZW1haWwscGFzc3dvcmQsdXNlcm5hbWUpXG5cdFx0c2lnbkluKGVtYWlsLHBhc3N3b3JkKVxuXHR9XG5cdGNsYXNzIFByb3BlcnR5e1xuXHRcdHRpdGxlIFxuXHRcdGRlc2NyaXB0aW9uXG5cdFx0cHJpY2Vcblx0XHRsb2NhdGlvblxuXG5cdH1cblx0XHQiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)


The diagram below demonstrates
