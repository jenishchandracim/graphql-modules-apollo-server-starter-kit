# react-storybook-rollup-starter-kit

This project is to be used as a template/starter-kit for building GraphQL APIs using both GraphQL modules and Apollo Server.

This project is bootstrapped with the following
- [GraphQL Modules v.0.7.0](https://graphql-modules.com/)
- [Apollo Server v.2.9.0](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL Import v.0.7.1](https://oss.prisma.io/content/graphql-import/overview)
- [Jest v.24.7.1](https://www.npmjs.com/package/jest)
- [Airbnb esint base v.14.0.0](https://www.npmjs.com/package/eslint-config-airbnb-base)

## Getting Started

In order to get started using the setup, download/pull/fork the repository and start building your modules under `/src/modules`.<br>
Each module you create should follow the same setup as per the `Student` component, where each has:
- `.js` file for the source code
- `.resolvers.js` file for all the resolvers within the module
- `schema.graphql` file for including the typefs for all the modules

- `src/modules/index.js` file to include all app modules to be exported

The above configuration is needed to ensure both GraphQL module and Apollo Server are correctly executed.<br>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the Apollo Server.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.
This is called the playground to write queries and mutations.

### `yarn lint`

Runs airbnb linting base config.<br>
Please refer to `.eslintrc` for more details in rules that are excluded/added from the initial Airbnb configuration, which can be found [here](https://www.npmjs.com/package/eslint-config-airbnb-base)

### `yarn test`

Launches the test runner.<br>
Please refer to the `jest` framework for more details on writing NodeJS tests [here](https://www.npmjs.com/package/jest)

## Next steps

It is left to the development team who is utilising this starter kit to:<br>

- Decide where the GraphQL API should be hosted, whether it should be server based or serverless.<br>
The base configuration found in this repository is for server based deployment, however serverless can also be achieved, please use the links below and follow the instructions on how to host it in `Azure Functions` and `AWS Lambda`:
    - Azure Functions - [https://www.apollographql.com/docs/apollo-server/deployment/azure-functions](https://www.apollographql.com/docs/apollo-server/deployment/azure-functions)
    - AWS Lambda - [https://www.apollographql.com/docs/apollo-server/deployment/lambda](https://www.apollographql.com/docs/apollo-server/deployment/lambda)




