import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import NavSidebar from './NavSidebar';
import { navResponsive } from '../actions/nav';

import Home from '../screens/HomeNews';
import Sections from '../screens/HomeNewsSections';
import Section from '../screens/Section';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Post from '../screens/Post';
import Support from '../screens/Support';
import Next from '../screens/Next';
import About from '../screens/About';
// import Tasks from '../screens/Tasks';
// import Task from '../screens/Task';
import NotFound from '../screens/NotFound';

class Main extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  _onResponsive(responsive) {
    this.props.dispatch(navResponsive(responsive));
  }

  render() {
    const {
      nav: { active: navActive, enabled: navEnabled, responsive }
    } = this.props;
    const includeNav = (navActive && navEnabled);
    let nav;
    if (includeNav) {
      nav = <NavSidebar />;
    }
    const priority = (includeNav && responsive === 'single' ? 'left' : 'right');

    return (
      <App centered={false}
        // style={{
        //   height: this.state.height,
        //   width: this.state.width,
        // }}
      >
        <Router>
          <Split
            priority={priority}
            flex='right'
            onResponsive={this._onResponsive}
          >
            {nav}
            <Switch>
              <Route exact={true} path='/' component={Home} />

              <Route path='/sections' component={Sections} />
              <Route path='/section/:section' component={Section} />
              <Route path='/post/:post' component={Post} />
              <Route path='/dashboard' component={Dashboard} />
              {/* <Route path='/login' component={Login} /> */}
              <Route path='/support' component={Support} />
              {/* <Route path='/nextissue' component={Next} /> */}
              <Route path='/about' component={About} />
              {/* <Route path='/tasks/:id' component={Task} /> */}
              {/* <Route path='/tasks' component={Tasks} /> */}
              <Route path='/*' component={NotFound} />
            </Switch>
          </Split>
        </Router>
      </App>
    );
  }
}

Main.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    responsive: PropTypes.string
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Main);
