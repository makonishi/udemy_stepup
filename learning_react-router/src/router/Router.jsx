import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Page2 } from '../Page2';
import { page1Route } from './Page1Route';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/page1" render={({match: { url }}) => (
        <Switch>
          {/* => {}ではなく=> ()を使うと, returnを省略できる. */}
          {page1Route.map((route) => (
            <Route
              exact={route.exact}
              path={`${url}${route.path}`}>
                {route.children}
            </Route>
          ))}
        </Switch>
      )} />
      <Route path="/page2"><Page2 /></Route>
    </Switch>
  )
}
