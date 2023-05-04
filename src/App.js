import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* Render our own Nav component which renders the links */}
        <Nav/>
        <Switch>
            <Route path="/" exact><Home /></Route>
            {/* <Route path="/users/:id"><Users /></Route>
            <Route path="/contact"><Contact /></Route> */}
            <Route path="/404"><NotFound /></Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
