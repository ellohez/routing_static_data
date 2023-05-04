import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavComponent from './Components/NavComponent';
import NotFound from './Components/NotFound';
import Posts from './Components/StaticData/Posts';
import Home from './Components/Home';
import Comments from './Components/StaticData/Comments';
import Albums from './Components/StaticData/Albums';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavComponent/>
      <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/posts"><Posts /></Route>
            <Route path="/comments"><Comments /></Route>
            <Route path="/albums"><Albums /></Route>
            <Route path="/404"><NotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
