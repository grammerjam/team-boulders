import './App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div>
      <header>
        <h1>Team Boulders | Entertainment Web App</h1>

        <nav>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/signup">Sign Up</Link>
          <br/>
          <Link to="/login">Login</Link>
          <br/>
          <Link to="/movies">Movies</Link>
          <br/>
          <Link to="/tvseries">TvSeries</Link>
          <br/>
          <Link to="/bookmarked">Bookmarked</Link>
        </nav>

      </header>

      <Outlet/>

      <footer></footer>
    </div>
  );
}

export default App;
