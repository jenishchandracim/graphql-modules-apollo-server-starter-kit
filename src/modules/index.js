const { GraphQLModule } = require('@graphql-modules/core');

const StudentModule = require('./Student');

const AppModule = () => new GraphQLModule({
  imports: [
    StudentModule(),
  ],
});

module.exports = AppModule;
