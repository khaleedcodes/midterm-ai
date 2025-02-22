import { gql } from '@apollo/client';

export const ADD_PROMPT = gql`
  mutation AddPrompt(
    $chatId: String!
    $prompt: String!
    $response: String!
    $createdAt: String!
    $chatTitle: String!
    $upVotes: Int
    $downVotes: Int
  ) {
    addPrompt(
      chatId: $chatId
      prompt: $prompt
      response: $response
      createdAt: $createdAt
      chatTitle: $chatTitle
      upVotes: $upVotes
      downVotes: $downVotes
    ) {
      chatId
    }
  }
`;

export const DELETE_PROMPT = gql`
  mutation DeletePrompt($chatId: String!) {
    deletePrompt(chatId: $chatId)
  }
`;
