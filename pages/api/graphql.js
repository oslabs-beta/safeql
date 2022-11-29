//import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const { gql, ApolloServer } = require ("apollo-server")

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql `
  # Comments in GraphQL strings with #
  # ! means value cannot be null
  # Scalar types String, Int, Float, BOolean adn ID
  # list type is surrounded in brackets [Int] is list of integers

  type users {
    id: ID!
    username: String!
    password: String!
  }

  type endpointhistory {
    id: ID!
    endpoint: String!
    userid: Int
    users: Int
  }

# type mutation is like an POST, PUT, PATCH, DELETE
# input type is for mutations if you only want to have select columns and not have to list all of them to mutate them
# javascript has no enum support but typescript does

# query that lists all endpoints for a specified user
  type Query {
    users: [endpoint]
  }

  type Mutation {
    addEndpoint(endpoint: String!, userid: Int) : endpointhistory
  }



`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    endpoints: () => endpoints,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);