const { gql } = require('apollo-server-express');
module.exports = gql`
  extend type Query {
    trips: [Trip]
    trip(id: Int!): Trip
    imgs: [Img]
    img(id: String!): Img
  }

  extend type Mutation {
    createTrip(tdest: String!, tdate: Int!, tlead: String!, treport: String! ): Trip!
    removeTrip(id: Int!): Boolean
  }

  type Trip {
    id: ID!
    tdest: String!
    tdate: Int!
    tlead: String!
    owner: User!
    treport: String!
    tphotos: [Img]!
  }
  type Img {
    imgfile: String!
  }
`;