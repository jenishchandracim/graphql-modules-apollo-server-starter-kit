const { GraphQLModule } = require('@graphql-modules/core');
const { importSchema } = require('graphql-import');
const path = require('path');

const resolvers = require('./resolvers');

const StudentModule = () => {
  try {
    const typeDefs = importSchema(path.join(__dirname, './schema.graphql'));

    return new GraphQLModule({
      typeDefs,
      resolvers: resolvers(),
    });
  } catch (error) {
    throw Error(`Unable to load 'Student Module', ${error}`);
  }
};

module.exports = StudentModule;
