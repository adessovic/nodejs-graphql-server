const express = require('express');
const app = express();
const port = 4000;

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    user: String
    message: String
  }
`);

const root = {
  user: () => {
    return 'Lionel Messi';
  },
  message : () => {
    return 'Goooooal'
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port);
console.log(`GraphQL Live at http://localhost:${port}/graphql`);