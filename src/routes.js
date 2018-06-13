import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

//these are stateless functional components
//but these could be full on class-based components if need be.
//NOTE: these would usually be in their own component file and imported here.
const Route1 = () => <h1>Route1</h1>;
const Route2 = () => <h1>Route2</h1>;
const Route3 = () => <h1>Route3</h1>;

const DefaultNestedRoute = () => <h1>DefaultNestedRoute</h1>;
const NestedRouteA = () => <h1>NestedRouteA</h1>;
const NestedRouteB = () => <h1>NestedRouteB</h1>;
const NestedRouteC = () => <h1>NestedRouteC</h1>;

export default (
  <Switch>
    {/* Taking off the exact prop would only ever display the Route1 component
        because a Link which links to '/route2' would still match the '/' Route.
        The exact prop tells the link to ONLY match the '/'.  
     */}
    {/* The component prop only lets us display a given component.
        Changing it to a render prop lets us display whatever JSX we want.
     */}
    <Route path="/" exact component={Route1} />
    <Route path="/route2" component={Route2} />
    <Route
      path="/route3"
      render={() => (
        <div>
          {/* We still want to show the Route3 component when they hit '/route3' */}
          <Route3 />
          {/* This div and its links would ideally be abstracted into another component */}
          <div>
            <Link style={{ padding: '15px' }} to="/route3/nestedA">
              NestedRouteA
            </Link>
            <Link style={{ padding: '15px' }} to="/route3/nestedB">
              NestedRouteB
            </Link>
            <Link style={{ padding: '15px' }} to="/route3/nestedC">
              NestedRouteC
            </Link>
          </div>
          <Switch>
            {/* If you take out this next line, there will be no default nested route.
                Notice how this route matches our parent route.
             */}
            <Route path="/route3" exact component={DefaultNestedRoute} />
            <Route path="/route3/nestedA" exact component={NestedRouteA} />
            <Route path="/route3/nestedB" exact component={NestedRouteB} />
            <Route path="/route3/nestedC" exact component={NestedRouteC} />
          </Switch>
        </div>
      )}
    />
  </Switch>
);
