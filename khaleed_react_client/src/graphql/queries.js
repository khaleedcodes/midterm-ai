import { gql } from '@apollo/client';

export const GET_PROMPTS = gql`
  query {
    getPrompts {
      chatId
      prompt
      response
      createdAt
      chatTitle
      upVotes
      downVotes
    }
  }
`;
