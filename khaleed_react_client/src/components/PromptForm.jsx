import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROMPT } from "../graphql/mutations";
import { GET_PROMPTS } from "../graphql/queries";

const PromptForm = () => {
  const [formData, setFormData] = useState({
    chatId: "",
    prompt: "",
    response: "",
    createdAt: "",
    chatTitle: "",
    upVotes: 0,
    downVotes: 0,
  });

  const [addPrompt] = useMutation(ADD_PROMPT, {
    refetchQueries: [{ query: GET_PROMPTS }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPrompt({
      variables: {
        ...formData,
        upVotes: parseInt(formData.upVotes),
        downVotes: parseInt(formData.downVotes),
        createdAt: new Date().toISOString(),
      },
    });
    setFormData({
      chatId: "",
      prompt: "",
      response: "",
      createdAt: "",
      chatTitle: "",
      upVotes: 0,
      downVotes: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 border border-gray-200 rounded-lg shadow-lg bg-white space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Create a New Prompt
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          name="chatId"
          placeholder="Chat ID"
          value={formData.chatId}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="chatTitle"
          placeholder="Chat Title"
          value={formData.chatTitle}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="prompt"
          placeholder="Prompt"
          value={formData.prompt}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="response"
          placeholder="Response"
          value={formData.response}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <div className="flex gap-4">
          <input
            type="number"
            name="upVotes"
            placeholder="Upvotes"
            value={formData.upVotes}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="downVotes"
            placeholder="Downvotes"
            value={formData.downVotes}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Add Prompt
        </button>
      </div>
    </form>
  );
};

export default PromptForm;
