import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import FormDownIcon from 'grommet/components/icons/base/FormDown';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
// import PostHori from '../Post/PostHori';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
import DuplicateIcon from 'grommet/components/icons/base/Duplicate';
import NavControl from './NavControl';
// import Footer from '../Footer';
import Toast from 'grommet/components/Toast';

class HeaderSix extends React.Component {
  constructor() {
    super();
    this.state = {
      toast: null,
    };
  }

  render() {

    return (
      <Header
        fixed
        direction='row'
        justify='between'
        size='medium'
        pad={{ horizontal: 'medium', between: 'small' }}
        style={{
          zIndex: 1,
        }}
      >
        <NavControl />
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Menu
            style={{

              zIndex: 10,
            }}
            icon={<DuplicateIcon />}
            dropAlign={{ right: 'right' }}>
            <Anchor
              style={{
                marginTop: 50,
                zIndex: 100
              }}
              // href='/nextissue'
              
              className='active' />
            <Anchor
              style={{
                zIndex: 100
              }}
              // href='/nextissue'
                        onClick={() => {
                            this.setState({
                                toast: <Toast status='warning'
                                    onClose={() => this.setState({ toast: null })}>

                                    即將開放！敬請期待！
                  </Toast>
                            })
                                ;
                        }}
              className='active'>
                        投稿
            </Anchor>
          </Menu>
        </Box>
        {this.state.toast}
      </Header>
    );
  }
}


export default HeaderSix;
