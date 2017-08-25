import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/main.css';

import App from './components/App';
import Cafe from './components/Cafe';
import CafeList from './components/CafeList';
import AddCafeForm from './components/AddCafeForm';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ App } />
                <Route exact path="/map" component={ App } />
                <Route exact path="/cafes" component={ CafeList } />
                <Route path="/cafes/:cafe" component={ Cafe } />
                <Route exact path="/add" component={ AddCafeForm } />
                <Route component={ NotFound } />
            </Switch>
        </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
