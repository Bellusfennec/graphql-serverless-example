const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Image {
    source: String # Url scalar
    description: String
    thumbnailSource(width: Int, height: Int): String # Url scalar
  }

  enum Currency {
    EUR
    CHF
    USD
  }

  type Price {
    amount: Int
    currency: Currency
  }

  type Product  {
    id: ID!
    name: String
    description: String
    image: Image
    brand: String
    price: Price
  }

  type Query {
    product(id: ID!): Product
  }
`;

const resolvers = {};

const mocks = {};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: true
};