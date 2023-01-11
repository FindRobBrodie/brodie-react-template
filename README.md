# Brodie React Template

This template can be used to quickly create a React SPA application.

The target audience is C# / .NET developers who would like a strongly-typed stack.

React, Typescript, and GraphQL combined with MaterialUI make creating UI's a dream.

Feel free to use this template and change any part of it.  It was made to be extensible. 
Rip out any pieces you do not need and add what ever libraries you prefer to work with.

If you found this repo useful, please give it a star to show your appreciation!

Please note, I will soon add a GraphQL server template in Hot Chocolate.

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

The quickest way to publish this website with Visual Studio publish.

## Reporting Issues

If you run into any issues, please create a bug on github with as many details as possible.

Please provide a way to reproduce the issue you encounter.

