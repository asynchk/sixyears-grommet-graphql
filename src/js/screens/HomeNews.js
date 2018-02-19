import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';
import {
  loadDashboard, unloadDashboard
} from '../actions/dashboard';

import { pageLoaded } from './utils';

const sessionsNews = {
  sessions: [
    {
      header: '主席的話',
      background: '',
    },
  ]
};
class Dashboard extends Component {
  componentDidMount() {
    pageLoaded('Dashboard');
    this.props.dispatch(loadDashboard());
  }

  componentWillUnmount() {
    this.props.dispatch(unloadDashboard());
  }

  render() {
    console.log(this.props);
    const { error, tasks } = this.props;
    const { intl } = this.context;

    let errorNode;
    let listNode;
    if (error) {
      errorNode = (
        <Notification
          status='critical'
          size='large'
          state={error.message}
          message='An unexpected error happened, please try again later'
        />
      );
    }
    const homeImage = (
      <Image
        src='/img/home-hero.jpg'
        fit='cover'
        full={true}
      />
    );
    const a = [1, 2, 3, 4, 5];
    return (
      <Article primary={true}>
        <Header
          direction='row'
          justify='between'
          size='large'
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <NavControl />
        </Header>
        {errorNode}
        <Hero
          background={homeImage}

        >
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              align='start'
              pad='medium'>
              <Heading margin='none'>
                The Six Years
              </Heading>
            </Box>
          </Box>
        </Hero>
        <Box
          direction='row'
          justify='start'
          align='center'
          wrap={true}
          colorIndex='light-2'
          pad='small'
        >
          {
            a.map(d => (
              <Card
                thumbnail='/img/home-hero.jpg'
                label='Sample Label'
                heading='Sample Heading'
                description='Sample description providing more details.' />))
          }
        </Box>
        <Box pad='medium'>
          <Heading tag='h3' strong={true}>
            Running Tasks
          </Heading>
          <Paragraph size='large'>
            The backend here is using request polling (5 second interval).
            See <Anchor path='/tasks'
              label={getMessage(intl, 'Tasks')} /> page for an example
            of websocket communication.
          </Paragraph>
        </Box>
        {listNode}
        <Footer justify='between'>
          <Title>
            <s />
            Title
          </Title>
          <Box direction='row'
            align='center'
            pad={{ between: 'medium' }}>
            <Paragraph margin='none'>
              © 2016 Grommet Labs
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{ right: 'right' }}>
              <Anchor href='#'>
                Support
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
              <Anchor href='#'>
                About
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      </Article>
    );
  }
}

Dashboard.defaultProps = {
  error: undefined,
  tasks: []
};

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Dashboard.contextTypes = {
  intl: PropTypes.object
};

const ALL_SECTIONS_QUERY = gql`
  query FETCH_ALL_SECTIONS {
    allSections{
      id
      header
    }
  }
`;

const ListPageWithQuery = graphql(ALL_SECTIONS_QUERY, {
  name: 'allPostsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(Dashboard);

const select = state => ({ ...state.dashboard });

export default connect(select)(ListPageWithQuery);
