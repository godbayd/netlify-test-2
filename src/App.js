import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';

import './styles.css';


const Home = (props) => <div className="page" style={{backgroundColor: 'lightblue'}}></div>
const Work = (props) => <div className="page" style={{backgroundColor: 'orange'}}></div>
const About = (props) => <div className="page" style={{backgroundColor: 'lime'}}></div>

class Nav extends React.Component {
  constructor(props){ super(props) };
  linkStyle={ marginRight: 20   }
  render(){
    return (
      <div>
        <Link style={{...this.linkStyle}} to="/">Home</Link>
        <Link style={{...this.linkStyle}} to="/work">Work</Link>
        <Link to="/about">About</Link>
      </div>
    );
  };
};

class Main extends React.Component {
  render(){
    // in order for this to work correctly
    // the css needs to be loaded at the top from
    // a css file
    // instead of inline in the jsx
    // the elements were not staying
    // in absolute position
    // so they were not overlapping during animation
    return (
      <main>
        <Route render={
          ({location}) => {
              return (
                <TransitionGroup component={null}>
                  <CSSTransition
                    key={location.key}
                    timeout={1000}
                    classNames="fade"
                    appear
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/work" component={Work} />
                      <Route exact path="/about" component={About} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              );
            }
          }
        />
      </main>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //
    };
  };

  render(){
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  };
}

export default App;
