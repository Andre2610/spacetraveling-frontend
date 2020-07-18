# **Space Travel Agency**

## Table of contents

- [Introduction](#Introduction)
- [Space Travel Agency](#Space-Travel-Agency)
- [Goals of this project](#Goals-of-this-project)
- [Technologies used](#Technologies-used)
<!-- - [Demo](#Demo) -->
- [Server repository](#Server-repository)

## **Introduction**

Hi, this project was built by [Antony Smit](https://github.com/SmitnAntonyDv), [Sebastian Baez](https://github.com/sdbb21) and myself during the group project week of our academy, it is a web application called Space Travel Agency. This is a MVP and not the final version. It is fully functional but missing some features that will be implemented in the future.

## **Space Travel Agency**

The idea is to offer a travel experience similar to a travel agency but on a interplanetary level!

## **Goals of this project**

The main goal of this project was to gain experience developing a full-stack app in a group while using version control. We tried to explore new technologies that none of us had tried before. It became our little Frankenstein with the amount of different technologies used for styling (CSS, Bootstrap, Material-UI). </br> We tried to commit with clear messages and when merging, we tried to provide a list of what was done.

## **Technologies used**

**Back end**

- Express
- REST
- Sequelize
- Postgres
- NodeJS
- Nodemailer
- Stripe

**Front end**

- React
- Redux
- Axios
- React-Bootstrap
- Material-UI

**External API's**

- [NASA API](https://api.nasa.gov/)

<!-- ## **Demo**

![General-use](https://github.com/Andre2610/travelersdiary-front-end/blob/Development/Project_Info/generalview.gif?raw=true)
![Login-singup](https://github.com/Andre2610/travelersdiary-front-end/blob/Development/Project_Info/signup_signin.gif?raw=true)
![Create-post](https://github.com/Andre2610/travelersdiary-front-end/blob/Development/Project_Info/createpost.gif?raw=true)
![End-trip](https://github.com/Andre2610/travelersdiary-front-end/blob/Development/Project_Info/generalview.gif?raw=true) -->

## **Server repository**

The back-end was built in express and it is a REST a API. The database is built using Postgres and Sequelize. You can find the back-end's repository [HERE](https://github.com/Andre2610/spacetraveling-backend)

## **Setup**

- **Server setup**

  - clone the repository;
  - cd into the project directory
  - on first run, run the script `npm run initialize`, this will run `npm i && npm run resetDB && npm run start`;
  - afterwards simply run `npm run start` which will run the script `npx nodemon index.js` or `node index.js`
  - server runs on port 5000 by default

- **Client setup**
  - clone the repository;
  - cd into the project directory;
  - on first run, run the script `npm run initialize`, this will run `npm install && react-scripts start`;
  - afterwards first run just run the script `npm run start` to start development;
  - client runs on localhost:3000 by default;

:exclamation: You will need to create your own NASA API key and place it on /config/constants.js `export const NASAK = YOUR_API_KEY`, in order for the app to your in your local host.
