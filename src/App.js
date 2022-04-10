import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './App.css';
import Posts from './components/Posts';

function App() {
  return (
  <Router>
    <AppRouter />
  </Router>
  );
}

export default App;
