import React from 'react';
import './App.css';
import Movies from './components/movies';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customers from './components/customer';
import Rentals from './components/rentals';
import NotFound from './components/not-found';
import Navbar from './components/navbar';

function App() {
  return (
    <main className="container-fluid">
      <Navbar/>
      <Switch>
        <Route path="/movies/:id" component={MovieForm}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals }></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found"/>
      </Switch>
    </main>
  );
}

export default App;
