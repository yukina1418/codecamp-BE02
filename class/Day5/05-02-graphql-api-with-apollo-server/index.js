import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: Int
    fetchBoardsCount: Int!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 5,
  },
};
// shorthand property js 객체의 키와 벨류가 같으면 벨류를 생략할 수 있다
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3001}`);
});
