import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
// import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Footer from '../components/Footer';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from '../components/Header';
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
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

import temp from '../message';
import NavControl from '../components/NavControl';


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
    pageLoaded('The Six Years');
    // this.props.dispatch(loadDashboard());
  }

  componentWillUnmount() {
    // this.props.dispatch(unloadDashboard());
  }

  render() {
    let allSections;
    console.log(this.props);
    const { error, tasks } = this.props;
    ({ allSections } = this.props.allSections);
    const homeImage = (
      <Image src='/img/home-hero.jpg' fit='cover' full={true} />
    );

    return (
      <Article primary={true}>
        <Header direction='row' justify='between' size='large'
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <NavControl />
        </Header>
        <Hero background={homeImage} />
        <Box direction='row' justify='center' align='center'>
          <Box basis='1/2' align='center' pad='medium'>
            <Heading margin='none'>The Six Years</Heading>
          </Box>
        </Box>
        <Heading tag='h2' strong={true}>{temp.featureSection}</Heading>
        <Box
          align='center'
          colorIndex='light-2'
          pad='small'
        >
          <Tiles
            fill
          >
            {allSections && allSections.map(s => (
              <Tile>
                <Card
                  margin='medium'
                  key={s.id}
                  thumbnail={s.background.src}
                  label={s.subheader}
                  heading={s.header}
                  colorIndex='light-1'
                  description={s.description? <Paragraph>{s.description}</Paragraph> : null}
                  onClick={() => window.location.pathname = `/section/${s.id}`}
                />
              </Tile>
            ))
            }
          </Tiles>
        </Box>
        <Footer />
      </Article>
    );
  }
}

const ALL_SECTIONS_QUERY = gql`
  query FETCH_ALL_SECTIONS {
    allSections(filter: {issue:{issue: 3}}){
      id
      header
      subheader
      description
      layout
      background {
        id
        src
        title
      }
    }
  }
`;

const DashboardwithQuery = graphql(ALL_SECTIONS_QUERY, {
  name: 'allSections',
  options: {
    fetchPolicy: 'network-only',
  },
})(Dashboard);

const select = state => ({ ...state.dashboard });

export default connect(select)(DashboardwithQuery);
