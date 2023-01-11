# Brodie React Template

This template can be used to quickly create a React SPA application with a modern stack.

The target audience is C# / .NET developers who would like a strongly-typed stack,
a rich component library, and an opinionated React setup. This repo will allow you to 
hit the ground running.  You can focus on building your product and not worry about the 
low-level details.

React, Typescript, and GraphQL combined with MaterialUI make creating UI's a dream.

Feel free to use this template and change any part of it.  It was made to be extensible. 
Rip out any pieces you do not need and add what ever libraries you prefer to work with.

If you found this repo useful, please give it a star to show your appreciation!

Please note, I will soon add a GraphQL server template in Hot Chocolate.

## Live Demo

[Click here to see the template in action!](https://findrobbrodie.github.io/brodie-react-template/)

Click around, try dark mode and changing the language!

## Tech Stack

 * React 18
 * Typescript
 * .NET 6
 * Material UI V5 - a rich library of React components
 * React Router 6
 * GraphQL
 * graphql-codegen - to automatically generate Typescript from schema
 * Apollo Client 
 * i18next - for translation
 * oidc-client-ts - OAuth2.0 OpenIDConnect support of auth needs

## Prereqs

Please install the following before running this app:

 * Visual Studio 2022
 * vscode
 * Node
 * npm

## Getting Started with Brodie React Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can use Visual Studio 2022 to run this app in dev. The first time you run 
this app it will take a few minutes.  That is because npm will install all the dependencies. 
It will be quicker the second time.

## Available Scripts

You can also run this app in dev with the npm script below: 
In the project directory, you can run:

### `npm start`

Runs the app in the development mode. However it is preferred to use Visual Studio's debug.

### `npm run codegen`

This will fetch the latest GraphQL schema.  It will also convert all the GraphQL files into strongly-typed hooks.

Ensure your server is running.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Publish App

### publish

You can publish this app exactly how you would any other .NET 6 solution.
[Click here for more information.](https://learn.microsoft.com/en-us/dotnet/core/deploying/)

If you are looking to publish manually to your host, the quickest way is with Visual Studio's build in publish option.

Also note you can create a Docker image.

## Reporting Issues

If you run into any issues, please create a bug on github with as many details as possible.

Please provide a way to reproduce the issue you encounter.

