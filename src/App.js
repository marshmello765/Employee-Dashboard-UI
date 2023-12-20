import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter as Router, Route, Switch,Link  } from 'react-router-dom';
import EmployeeList from './components/employee-list/employee-list';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/employee-list" component={EmployeeList} />
        <Route path="/employee-dashboard/" component={Dashboard} />
        </Switch>
    </Router>
      </header>
    </div>
  );
}

export default App;
