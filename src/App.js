import LoginPage from './components/loginPage/loginPage.js';
import React, {Component} from 'react';
import AssetsPage from './components/assetsPage/assetsPage.js';
import Analyser from './components/analyser/analyser.js';
import DataForm from './components/dataForm/dataForm.js';
import ProjectsPage from './components/projectsPage/projectsPage.js';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import ProfilePage from "./components/ProfilePage";
import StaffList from "./components/StaffList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/staffList">
            <StaffList />
          </Route>
          <Route exact path="/newsFeed">
            <NewsFeed />
          </Route>
          <Route exact path="/assets">
            <AssetsPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/analyser">
            <Analyser />
          </Route>
          <Route exact path="/newsFeed">
            <NewsFeed />
          </Route>
          <Route exact path="/staffList/:id">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;