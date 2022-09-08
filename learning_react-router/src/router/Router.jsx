import { Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { page1Route } from './Page1Route';
import { page2Route } from './Page2Route';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/page1" render={({match: { url }}) => (
        <Switch>
          {/* => {}ではなく=> ()を使うと, returnを省略できる. */}
          {page1Route.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${url}${route.path}`}>
                {route.children}
            </Route>
          ))}
        </Switch>
      )} />
      <Route path="/page2" render={({match: { url }}) => (
        <Switch>
          {page2Route.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${url}${route.path}`}>
                {route.children}
            </Route>
          ))}
        </Switch>
      )} />
    </Switch>
  )
}
