const express = require('express');
const graphqlHTTP = require('express-graphql');

const { ApolloProvider } = require('react-apollo');

const app = express();

//Middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema: require('./graphql/schema.js'),
  })
);

app.listen(4000, () => {
  console.log('listening on 4000');
});
