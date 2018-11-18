import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const pageStyles = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px',
  height: '200px',
  fontSize: '25px',
  color: 'white'
};
const homeStyles = {
  ...pageStyles,
  backgroundColor: 'red'
};
const workStyles = {
  ...pageStyles,
  backgroundColor: 'blue'
};
const aboutStyles = {
  ...pageStyles,
  backgroundColor: 'green'
};

const Home = () => <div style={homeStyles}>Home</div>;
const Work = () => <div style={workStyles}>Work</div>;
const About = () => <div style={aboutStyles}>About</div>;

// ******* IMPORTANT *******
// its important that the location props location
// in Switch is not location.key like whats used in CSSTransition
// these two need to be different in order to
// differentiate between exiting and entering routes
// to see what happens when these arent different
// just temporarily delete the location prop from the Switch component

class Main extends React.Component {
  render(){
    return (
      <main>
        {/*this empty route is used soley to pass location to children*/}
        <Route render={ ({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={1500}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/work" component={Work} />
                <Route path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </main>
    );
  }
}

export default Main;
