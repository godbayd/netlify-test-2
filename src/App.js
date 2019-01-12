import React from 'react';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

import {
  TransitionGroup,
  Transition
} from 'react-transition-group';

import { TweenMax, Power4 } from 'gsap';

/*
  unlike CSSTransition, Transition works better with jsx inline styles
*/

const pageStyle = (bgcolor) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: bgcolor,
  transform: 'translateX(-100%)'
});

const Home = (props) => <div className="page" style={{...pageStyle('lightblue')}}>Home</div>
const Work = (props) => <div className="page" style={{...pageStyle('orange')}}>Work</div>
const About = (props) => <div className="page" style={{...pageStyle('lime')}}>About</div>

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
                  <Transition
                    in={true}
                    timeout={600}
                    key={location.key}
                    onEnter={
                      (e) => {
                        console.log(e)
                        TweenMax.to(
                          e, 0.3,
                          {
                            x: 0,
                            opacity: 1,
                            ease: Power4.easeOut
                          }
                        ).delay(0.3)
                      }
                    }
                    onExit={
                      (e) => {
                        console.log(e)
                        TweenMax.to(
                          e, 0.3,
                          {
                            x: '-100%',
                            opacity: 0,
                            ease: Power4.easeIn
                          }
                        );
                      }
                    }
                    mountOnEnter
                    unmountOnExit
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={()=><Home />} />
                      <Route exact path="/work" component={()=><Work />} />
                      <Route exact path="/about" component={()=><About />} />
                    </Switch>
                  </Transition>
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
