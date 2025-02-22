import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROMPTS } from '../graphql/queries';
import { DELETE_PROMPT } from '../graphql/mutations';

const PromptList = () => {
  const { loading, error, data } = useQuery(GET_PROMPTS);
  const [deletePrompt] = useMutation(DELETE_PROMPT, {
    refetchQueries: [{ query: GET_PROMPTS }]
  });

  const handleDelete = (chatId) => {
    deletePrompt({ variables: { chatId } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {data.getPrompts.map((prompt) => (
        <div key={prompt.chatId} className="p-6 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">{prompt.chatTitle}</h3>
          <p className="text-gray-600"><strong>Prompt:</strong> {prompt.prompt}</p>
          <p className="text-gray-600"><strong>Response:</strong> {prompt.response}</p>
          <p className="text-gray-600">
            <strong>Upvotes:</strong> {prompt.upVotes} | <strong>Downvotes:</strong> {prompt.downVotes}
          </p>
          <button
            onClick={() => handleDelete(prompt.chatId)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PromptList;
