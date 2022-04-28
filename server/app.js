const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
//const { ApolloProvider } = require('react-apollo');

const app = express();

//Middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('listening on 4000');
});
