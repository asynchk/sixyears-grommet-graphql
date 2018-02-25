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
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Headline from 'grommet/components/Headline';

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

import temp from '../message';
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
    pageLoaded('The Six Years');
    this.props.dispatch(loadDashboard());
  }

  componentWillUnmount() {
    this.props.dispatch(unloadDashboard());
  }

  render() {
    let allSections;
    console.log(this.props);
    const { error, tasks } = this.props;
    ({ allSections } = this.props.allSections);
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
        src='/img/carousel-1.png'
        // src='/img/home-hero.jpg'
        fit='cover'
        full={true}
      />
    );
    // const CarouselMain;
    let Carousels = [];
    Carousels = (
      allSections && allSections.filter(s => s.featured == 4).map((s) => {
        if (s.featured == 4) {
          const sectionContent = {
            id: s.id,
            title: s.header,
            subheader: s.subheader,
            // content: s.description,
            description: s.description,
            background: s.background,
          };
          const postEles = s.posts.slice(0);
          postEles.unshift(sectionContent);
          return (
          // <Carousel>
            // { id: s.id,
            //   content:
            postEles.map((p) => {
              console.log(p);
              return (
                <Box
                  key={p.id}
                  direction='row'
                  justify='start'
                  full='horizontal'
                  size={{
                    height: 'xlarge'
                  }}
                  colorIndex='neutral-2'
                  texture={`${location.origin}/${p.background.src}`}
                >
                  <Box
                    direction='column'
                    justify='center'
                    basis='xlarge'
                    pad='large'
                    margin='medium'

                  >
                    <Box
                      colorIndex='neutral-1-a'
                      justify='around'
                      flex={true}
                      pad='medium'
                      // size={{
                      //   height: { max: 'full'}
                      // }}
                      style={{
                        borderStyle: 'solid',
                        borderRadius: 0,
                        borderWidth: 10,
                        borderColor: '#333',
                        // background: 'rgba(0,0,0,0.3)'
                      }}
                    >
                      <Heading strong >{p.title == sectionContent.title ? null : sectionContent.title}</Heading>
                      <Headline strong >{p.title}</Headline>

                      <Paragraph>{p.subheader}</Paragraph>
                      <Headline size='small'>{
                        p.description ?
                          p.description :
                          p.content ?
                            `${p.content.split('。')[0]}。` || `${p.content.substring(0, 25)} ...` :
                            null }
                      </Headline>
                      <Paragraph>{p.author}</Paragraph>
                      <Anchor
                        href={`/section/${sectionContent.id}`}
                      label='All Posts'
                    icon={<LinkNextIcon />}
                    />
                    </Box>

                  </Box>
                </Box>
              );
            })

          // </Carousel>
          );


          // return (<Carousel>{postEle}</Carousel>);
        }
      })

      // {/* <Box pad='large'
      //     colorIndex='neutral-3'>
      //     <Box pad='medium'
      //       colorIndex='neutral-2'>
      //       Content inside of a Box element.
      //     </Box>
      //   </Box> */}

    );

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
          backgroundColorIndex='dark'
          // size='small'

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
              <Box colorIndex='grey-2-a'>
                <Card heading='The Six Years'
                  description='Restart here'
                  label='Issue 3'
                  link={<Anchor
                    href={'/Sections/'}
                    label='All Sections'
                    icon={<LinkNextIcon />}
                  />}
                />
                {/* <Heading margin='none'>
                The Six Years
              </Heading> */}
              </Box>
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
            allSections && allSections.map(s => (
              <Card
                key={s.id}
                thumbnail={s.background.src}
                label={s.subheader}
                heading={s.header}
                description={s.description}
                link={<Anchor
                  href={`/section/${s.id}`}
                  label='Go To Section'
                  icon={<LinkNextIcon />}
                />}
              />))
          }
        </Box>

        {Carousels && Carousels.map(c => (
          <Carousel >{c}
          </Carousel>
        ))}
        {/* <Box
            //   key="11"
            //   direction='row'
            //   full={true}
            //   colorIndex='neutral-2'
            //   texture={`${location.origin}/img/carousel-1.png`}
            // >
            // </Box> */}
        <Box
          colorIndex='light-2'
          pad='medium'
          // basis='3/4'
          align='center'
        >
          <Heading tag='h3' strong={true}>
            {temp.featureSection}
          </Heading>
          <Tiles fill={true}
            flush={false}
            size='large'
            // onMore={...}
          >
            <Tile>
              <Card thumbnail='/img/carousel-1.png'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.'
                colorIndex='light-1'
              />
            </Tile>
            <Tile>
              <Card thumbnail='/img/carousel-1.png'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.'
                colorIndex='light-1'
              />
            </Tile>
            <Tile>
              <Card thumbnail='/img/carousel-1.png'
                colorIndex='light-1'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.' />
            </Tile>
            <Tile>
              <Card thumbnail='/img/carousel-1.png'
                colorIndex='light-1'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.' />
            </Tile>
          </Tiles>
        </Box>
        {listNode}
        <Footer />
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
            { AND:[
              {section:{featured: 4}}
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
