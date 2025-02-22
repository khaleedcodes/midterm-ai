const Prompt = require('../models/Prompt');

const resolvers = {
    Query: {
        getPrompts: async () => await Prompt.find({})
    },
    Mutation: {
        addPrompt: async (_, { chatId, prompt, response, createdAt, chatTitle, upVotes = 0, downVotes = 0 }) => {
            const newPrompt = new Prompt({ chatId, prompt, response, createdAt, chatTitle, upVotes, downVotes });
            await newPrompt.save();
            return newPrompt;
        },
        deletePrompt: async (_, { chatId }) => {
            await Prompt.findOneAndDelete({ chatId });
            return "Prompt deleted";
        }
    }
};

module.exports = resolvers;
