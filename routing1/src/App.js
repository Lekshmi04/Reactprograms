import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Register from './Register';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
     <div>
<Link to='/'>Home</Link>
<Link to='/register'>Register</Link>
     </div>
     <div>
        <Switch>
       <Route path='/' exact={true}>
         <Home/>
       </Route>
       <Route path='/register'>
         <Register/>
       </Route>
     </Switch>
     </div>
     </BrowserRouter>
    
    </div>
    
  );
}

export default App;
