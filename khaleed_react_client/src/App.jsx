import PromptForm from './components/PromptForm';
import PromptList from './components/PromptList';

function App() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">AI Prompts Manager</h1>
      {/* Flex container for larger screens, stacked on smaller screens */}
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left section - PromptForm */}
        <div className="flex-1 mb-8 md:mb-0">
          <PromptForm />
        </div>
        {/* Right section - PromptList */}
        <div className="flex-1">
          <PromptList />
        </div>
      </div>
    </div>
  );
}

export default App;
