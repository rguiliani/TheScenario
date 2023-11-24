# Interview Coding Challenge

Welcome to the Fluint.io hands-on coding assignment. The goal of this assignment is not to create a production-level service but to allow us to see how you naturally go about implementing solutions to problems.

## Prerequisites
The following tools need to be installed on your development machine:
- Docker Desktop
- docker-compose

## Submission Steps:
1. Fork or degit (link [https://github.com/Rich-Harris/degi](https://github.com/Rich-Harris/degi)) this repository.
2. Evaluate the README.md and solve the issues laid out in the scenario.
3. Send any questions for clarification to [jon@fluint.io](mailto:jon@fluint.io).
4. Submit your application by emailing a link to your solution and resume to [jon@fluint.io](mailto:jon@fluint.io).

## The Scenario
Build a simple note-taking app that allows users to create, edit, and delete notes. 

This will involve:

Frontend (fe/):
- Create UI with forms to add/edit notes.
- Display list of notes.
- Ability to delete notes.

Backend (be/):
- APIs to create, read, update, and delete notes.
- Store notes in a database like MongoDB.

Database (mongodb/):
- Notes collection with fields like id, title, content, created date.

## The Environment
This is a monorepo for an application with a Next.js frontend and a Nest.js backend. All of the core scaffolding is in place that is needed to have these projects running locally. Everything is encapsulated in a docker-compose environment (including CLI containers), so the only dependencies needed to run the application are Docker Desktop and docker-compose.

The Mongoose configuration is in place for communication between the BE Nest.js project and the FE project.

## Commands

### Install dependencies
For the FE project:
```
docker-compose -f docker-compose.cli.yml run --rm fe-cli npm install
```

For the BE project:
```
docker-compose -f docker-compose.cli.yml run --rm be-cli npm install
```

### Start the application
```
docker-compose up
```
Note: This will start up the application and make the frontend of the application available from a browser at [http://localhost:8080/](http://localhost:8080/), and the backend API is available at [http://localhost:3000/](http://localhost:3000/). Changes on the backend will be hot deployed to the container.

### Stop the application
```
docker-compose down
```

### Install a new library
For the FE project:
```
docker-compose -f docker-compose.cli.yml run --rm fe-cli npm i <package>
```

For the BE project:
```
docker-compose -f docker-compose.cli.yml run --rm be-cli npm i <package>
```