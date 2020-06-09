# Pendulum

## Overview

_**Pendulum** is a prototyping tool for software development. Named after Newton's Pendulum, the tools used in full-stack development, with the Request/Response Cycle are reprensentative of the swinging spheres and its motion. The prototypes provide an overview of the complete system being developed for a project and will be able to help with choosing the right tools and configuring a stack that best fits the task at hand._

<br>

## MVP

> The Minimum Viable Product for Pendulum consist of features to be completed during the first week of project development.

_The MVP for **Pendulum** will focus on a Jobs section. Users will be able to view the full stack for notable companies. This will allow the user to learn from stacks that have be proven to work and to familiarize themselves with a stack and its tools in the case they're looking to apply for a certain job. It will include 3 models: Users, Tools, & Jobs. Tools are the technologies used in development. Users will be able to add tools to their profile that shows their knowledge and experience. Jobs will have the tools that make up their full stack._

<br>

### Goals

- _Create Ruby on Rails API for Back-End_
- _Create User, Tool, and Job models_
- _User Authentication_
- _Full-CRUD Implementation_
- _Create React app for Front-End_
- _Responsive Web Design_

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                         |
| :--------------: | :-------------------------------------------------- |
|  Ruby on Rails   | _Configuration for database/models (Back-End)_      |
|      React       | _Configures Components for client-side (Front-End)_ |
|   React Router   | _Client-Side Routing. Sitemap (Front-End)_          |
|      Axios       | _HTTP API Calls from client-side (Front-End)_       |
|  JSON Web Token  | _User Authentication (Back-End)_                    |

<br>

### Client (Front End)

#### Wireframes

[Desktop Home](https://i.imgur.com/1bTdFeW.png)

- Desktop Landing

[User Profile](https://i.imgur.com/vNWYPsM.png)

- User Profile

[Jobs Index](https://i.imgur.com/BWXWa3J.png)

- Jobs Index

[Job Profile](https://i.imgur.com/Uxem6rg.png)

- Job Profile

[Register](https://i.imgur.com/YMWXj33.png)

- Register

[Login](https://i.imgur.com/8Y2ZtKq.png)

- Login

[Mobile Home](https://i.imgur.com/E6U9Hdv.png)

- Mobile Home

[Mobile User Profile](https://i.imgur.com/hSq5rOS.png)

- Mobile User Profile

[Tablet Job Profile](https://i.imgur.com/70FFd3H.png)

- Tablet Job Profile

#### Component Tree

[Pendulum Component Tree](https://i.imgur.com/PQ7obo9.png)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ Header.jsx
      |__ Home.jsx
      |__ Register.jsx
      |__ Login.jsx
      |__ Profile.jsx
      |__ Jobs.jsx
      |__ Job.jsx
|__ app.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ users.js
      |__ jobs.js

```

### Server (Back End)

#### ERD Model

[Pendulum ERD](https://i.imgur.com/MbJdkeO.png)

<br>

***