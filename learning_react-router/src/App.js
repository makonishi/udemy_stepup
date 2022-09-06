import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/page1">1つ目のページに遷移</Link>
      <Link to="/page2">2つ目のページに遷移</Link>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/page1" render={({match: { url }}) => (
          <Switch>
            <Route exact path={url}><Page1 /></Route>
            <Route path={`${url}/detailA`}><Page1DetailA /></Route>
            <Route path={`${url}/detailB`}><Page1DetailB /></Route>
          </Switch>
        )} />
        <Route path="/page2"><Page2 /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
