const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
//const { ApolloProvider } = require('react-apollo');
const mongoose = require('mongoose');
const app = express();
const { connectionStr } = require('./mongo/secret/MongoConnectionSecret');

mongoose.connect(connectionStr);
mongoose.connection.once('open', () => console.log('connected to Mongo DB'));
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
