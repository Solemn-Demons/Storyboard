const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!7
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;