import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/page1">1つ目のページに遷移</Link>
      <br />
      <Link to="/page2">2つ目のページに遷移</Link>
      <br />
      <Router />
    </BrowserRouter>
  );
}

export default App;
