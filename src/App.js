import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import LoginForm from './components/LoginForm';
import MyPage from './components/MyPage';
import Navigation from './components/Navigation';
import './styles/styles.scss';
import { UserProvider } from './context/UserContext';
import { BookProvider } from './context/BookContext';

class App extends Component {
  render() {
    return (
      <UserProvider>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={LoginForm} exact />
            <Route path="/dashboard" component={DashboardPage} />
            <BookProvider>
            <Route path="/mypage" component={MyPage} />
            </BookProvider>
          </Switch>
        </div>
      </Router>
      </UserProvider>
    );
  }
}

export default App;
