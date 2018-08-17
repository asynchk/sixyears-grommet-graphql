import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Headline from 'grommet/components/Headline';
import Columns from 'grommet/components/Columns';
import Section from 'grommet/components/Section';
import Footer from '../components/Footer';
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
import Carousel from 'grommet/components/Carousel';
import DoubleBoxSection from '../components/HomeSection/DoubleBoxSection';
import HeaderSix from '../components/Header';
import temp from '../message';
import NavControl from '../components/NavControl';
import QuestionsHeroSection from '../components/HomeSection/questionsHeroSection';
import CaroSections from '../components/HomeSection/CaroSection';
import TilesSection from '../components/HomeSection/TilesSection';
import { pageLoaded } from './utils';
import PostCardsSection from '../components/HomeSection/PostCardsSection';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      cardSection: {},
    };
  }
  componentDidMount() {
    pageLoaded('The Six Years');
  }
  render() {
    const homeImage = (
      <Image
        src='/img/carousel-1.png'
        // src='/img/home-hero.jpg'
        fit='cover'
        full={true}
      />
    );
    console.log(this.state);
    console.log(this.props);
    return (
      <Article primary={true}>
        <HeaderSix />
        <Hero background={homeImage} backgroundColorIndex='dark' size='medium' >
          <Box direction='row' justify='center' align='center'>
            <Box basis='1/2' align='end' pad='medium' />
            <Box basis='1/2' align='start' pad='medium'>
              <Box colorIndex='grey-1-a' >
                <Heading margin='none'>
                The Six Years
                </Heading>
              </Box>
            </Box>
          </Box>
        </Hero>
        {this.props.allSections.allSections && DoubleBoxSection({ allSections: this.props.allSections.allSections }).map(c => c)}
        {this.props.allSections.allSections &&
          TilesSection({
            allSections: this.props.allSections.allSections,
            isShowAll: this.state.showAll,
            onPress: () => this.setState({ showAll: !this.state.showAll })
          }).map(c => c)}
        {this.props.allSections.allSections && CaroSections({ allSections: this.props.allSections.allSections }).map(c => c) }
        <Box pad='medium' />
        {this.props.allSections.allSections && QuestionsHeroSection({ allSections: this.props.allSections }).map(q => q) }
        {this.props.allSections.allSections &&
          // <Box colorIndex='light-2' direction='row' pad='medium'>
          <Box
            colorIndex='light-2'
            align='center'
            pad='medium'
          >
          <Heading strong tag='h2'>投稿</Heading>
          <Columns
            justify='center'
            margin='small'
            maxCount={3}
            masonry={true}>
            {PostCardsSection({ allSections: this.props.allSections.allSections }).map(q => q)}
          {/* // </Box> */}
          </Columns>
          </Box>

          }
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
      issue {
        id
        issue
      }
      subheader
      description
      background {
        id
        src
        title
      }
      issue {
        id
        issue
      }
      featured
      posts (filter:
        { OR:
          [
            {section:{featured:5}}
            {section:{featured:2}}
            { AND:[
              {section:{featured: 4}}
              {isFeatured: true}
            ]}
            { AND:[
              {section:{featured: 6}}
              {isFeatured: true}
            ]}
          ]
        }
      )
      {
        id
        title
        author
        description
        content
        background {
          id
          src
        }
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
