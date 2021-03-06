import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';
import SessionMenu from './SessionMenu';
import { navActivate } from '../actions/nav';


const internalItems = [
  { path: '/about', label: '關於六年' },
  // { path: '', label: '投稿' }
]

class NavSidebar extends Component {
  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.props.dispatch(navActivate(false));
  }

  render() {
    const { nav: { items } } = this.props;

    const links = items.map(page => (
      <Anchor
      key={page.label}
      // path={page.path}
      label={page.label}
      onClick={() => {
        window.location.pathname = page.path;
        this.props.dispatch(navActivate(false));
      }}/>
    ));

    const internalLinks = internalItems.map(page => (
      <Anchor
        key={page.label}
        // path={page.path}
        label={page.label}
        onClick={() => {
          if (page.path) window.location.pathname = page.path;
          // this.props.dispatch(navActivate(false));
        }} />
    ));

    return (
      <Sidebar colorIndex='neutral-1-t' fixed={true}>
        <Header size='large' justify='between' pad={{ horizontal: 'medium' }}>
          <Title onClick={this._onClose} a11yTitle='Close Menu'>
            {/* <Logo /> */}
            <Image
              src={`${location.origin}/img/logo.png`}
              style={{
                width: 50
              }}
            />
            {/* <span>The Six Years</span> */}
          </Title>
          <Button
            icon={<CloseIcon />}
            onClick={this._onClose}
            plain={true}
            a11yTitle='Close Menu'
          />
        </Header>
        <Menu fill={true} primary={true}>
          {links}
        </Menu>
        <Footer>
          {/* <SessionMenu dropAlign={{ bottom: 'bottom' }} /> */}
          <Menu fill={true} primary={true}>
            {internalLinks}
          </Menu>
        </Footer>
      </Sidebar>
    );
  }
}

NavSidebar.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

NavSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string
    }))
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(NavSidebar);
