const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Prompt {
        chatId: String!
        prompt: String!
        response: String!
        createdAt: String!
        chatTitle: String!
        upVotes: Int
        downVotes: Int
    }

    type Query {
        getPrompts: [Prompt]
    }

    type Mutation {
        addPrompt(
            chatId: String!, 
            prompt: String!, 
            response: String!, 
            createdAt: String!, 
            chatTitle: String!, 
            upVotes: Int, 
            downVotes: Int
        ): Prompt
        deletePrompt(chatId: String!): String
    }
`;

module.exports = typeDefs;
