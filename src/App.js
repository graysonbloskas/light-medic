import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
