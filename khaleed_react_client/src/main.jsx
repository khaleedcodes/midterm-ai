import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import client from './utils/client';
import { ApolloProvider } from '@apollo/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
