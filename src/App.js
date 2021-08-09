import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home';
import AboutMe from './Containers/AboutMe/AboutMe';
import Contact from './Containers/Contact/Contact';
import Projects from './Containers/Projects/Projects';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header/>

        <Switch>
        
          <Route path="/" exact component={Home}/>
          <Route path="/aboutme" exact component={AboutMe}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/projects" exact component={Projects}/>

        </Switch>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
