# Interview Coding Challange
Welcome to the Fluint.io hands on coding assignment. The goal of this assignment is not to create a production level service but to allow for us to see how you naturally go about implementing solutions to problems. 

## Preequisites
The following tools need to be installed on your development machine. 
- Docker Desktop
- docker-compose

## Submition Steps:

1. Fork, or degit (link https://github.com/Rich-Harris/degi), this repository.
2. Evaluate the README.md, and solve the issues laid out in the scenario.
3. Send any questions for clarification to: https://github.com/jonccrawley or jon@fluint.io
4. Submit your application by emailing a link to your solution and resume to jon@fluint.io

## The Scenario
Build a simple note taking app that allows users to create, edit, and delete notes. 

This will involve:

Frontend (fe/):
- Create UI with forms to add/edit notes
- Display list of notes
- Ability to delete notes

Backend (be/):
- APIs to create, read, update, and delete notes
- Store notes in a database like MongoDB

Database (mongodb/):
- Notes collection with fields like id, title, content, created date.

## The Environment
This is a mono repository for a application with a NextJs Frontent and a Nestjs backend. All of the core scafolding is in place that is needed to have these project running locally. Everything is encaplilated in a docker-compose enviorment (including cli containers), so the only dependacies to run the application are docker desktop and docker-compose. 

The Mongoose configuration is in place for comunication between the BE Nestjs project and the FE project. 


## Commands: 

### Install dependencies: 
For the FE project: 
```
    docker-compose -f docker-compose.cli.yml run --rm fe-cli npm install
```

For the BE projece:  
```
    docker-compose -f docker-compose.cli.yml run --rm be-cli npm install
```

### Start the application: 
```
    docker-compose up
```
Note: This will startup the applciation and have the frontend of the application avalible from a browser at http://localhost:8080/ and the backend api is avalible at http://localhost:3000/. Changes on the backend will be hot deployed to the conatiner. 

### Stop the application: 
```
    docker-compose down
```

###Install a new library: 
For the FE project: 
```
    docker-compose -f docker-compose.cli.yml run --rm fe-cli npm i <pacakge>
```

For the BE projece:  
```
    docker-compose -f docker-compose.cli.yml run --rm be-cli npm i <pacakge>
```
