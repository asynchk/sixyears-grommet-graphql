import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import DownIcon from 'grommet/components/icons/base/Down';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import Post2 from '../Post/Post2';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from '../Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
import NavControl from '../NavControl';
import Footer from '../Footer';
import PostRedirected from '../Post/PostRedirected';
import Split from 'grommet/components/Split';
import PostBelow from '../Post/PostShowBelow';
// To the world
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPostId: '',
      chosenPostHeading: '',
      nextPostId: '',
      previousId: '',
    };
    this.setCurrentPost.bind(this);
  }
  setCurrentPost(id) {
    this.setState({
      chosenPostId: id
    });
  }
  render() {
    // console.log(this.props);
    let Section;
    if (this.props.sectionData && this.props.sectionData.Section) {
      ({ Section } = this.props.sectionData);
      const pid = Section.posts[0].id;
      const { length } = Section.posts;
      length < 2 && this.props.history.push(`/post/${pid}`, this.props.sectionData.Section);
    }
    const allPostIDs = this.props.allPostIds ? this.props.allPostIds.Section ? this.props.allPostIds.Section.posts : null : null;
    // console.log(this.props);
    // console.log(this.state);
    // this.props.sectionData.Section &&
    // ßthis.props.sectionData.Section.posts.length == 1 && this.props.history.push(`post/${this.props.sectionData.Section.posts[0].id}`, this.props.sectionData.Section)
    return (
      this.props.sectionData.Section ?
        this.props.sectionData.Section.posts.length > 1 ?
          <Article primary={true}>


            <Split separator={false}
              fixed
              priority='left'
              flex='right'

            >

              <Box
                direction='column'
                justify='start'
                // basis='small'
                style={{
                  width: window.innerWidth > 716 ? 300 : 'unset'
                }}

                align='stretch'
                wrap={true}
                colorIndex='light-1'
                pad='none'
              >
                <Header
                  fixed
                  direction='row'
                  justify='between'
                  size='medium'
                  pad={{ horizontal: 'medium', between: 'small' }}
                >
                  <NavControl />
                </Header>
                <Box colorIndex='neutral-2'
                  justify='center'
                  align='stretch'
                  pad='medium'
                  // style={{ marginBottom: 10, maxWidth: 350, maxHeight: 400}}
                >

                  <Box
                    direction='row'
                    justify='center'
                    align='center'>

                    <Box basis='1/2'
                      align='center'
                      pad='medium'>
                      <DownIcon />
                    </Box>
                    <Box basis='1/2'
                      align='start'
                      pad='medium'>
                      <Heading margin='none'>
                        {Section.header}
                      </Heading>
                    </Box>
                  </Box>
                </Box>
                {
                  Section && Section.posts && Section.posts.map((p, i, a) => {
                    
                    return(
                    <Card
                      key={p.id}
                      thumbnail={`${location.origin}/${p.background.src}`}
                      label={p.author}
                      heading={p.title}
                      description={
                        window.innerWidth < 716 && this.state.chosenPostId && this.state.chosenPostId == p.id ?
                          <PostBelow
                            postId={this.state.chosenPostId}
                            /> : null

                      }
                      onClick={() => {
                        // if (window.innerWidth > 716) {
                          this.setState({
                            chosenPostId: p.id,
                            // nextPostId: a[i + 1].id
                          });
                        // } else {
                        //   window.location = `/post/${p.id}`;
                        // }
                      }
                    }
                      // style={{ width: 330}}
                      // link={<Anchor
                      //   href={`/post/${p.id}`}
                      //   style={{ display: window.innerWidth > 716 ? 'none' : 'block' }}
                      //   // label='Go To Section'
                      //   icon={<LinkNextIcon />}
                      // />}
                    />)})
                }
                <Footer />
              </Box>
              <Box
                colorIndex='light-2'
                full='vertical'
                // wrap
                justify='center'
                align='center'
                pad='medium'
                size={{
                  width: {
                    min: 'medium'
                  }
                }}
                style={{
                  overflow: 'auto'
                }}>
                <Post2
                  sectionHeader={Section.header}
                  sectionDec={Section.description}
                  postId={this.state.chosenPostId}
                  allPostIDs={this.props.allPostIds.Section.posts}
                  previousId={this.state.previousId}
                  nextPostId={this.state.nextPostId}
                  setIDFunction={(id) => this.setCurrentPost(id).bind(this)}
                />
              </Box>
            </Split>

          </Article> :
          <div /> :
        <div />
    );
  }
}

const ALL_POST_IN_A_SECTION = gql`
    query FETCH_SECTION_AND_ITS_POSTS($id: ID) {
        Section(id: $id) 
        {
            id
            background {
                id
                title
                src
            }
            description
            header
            subheader
            posts {
                id
                author
                title
                description
                background {
                    id
                    src
                }
            }
        }
    }   
`;

const ALL_POST_IDS = gql`
    query FETCH_ALL_POST_IDS_IN_THIS_SECTION($id: ID) {
      Section(id: $id)
      {
        id
        posts {
          id
          title
        }
      }
    }
`;


const SectionWithQuery = compose(
  graphql(ALL_POST_IN_A_SECTION, {
    name: 'sectionData',
    options: ({ sectionId }) => ({ variables: { id: sectionId } }),
  }),
  graphql(ALL_POST_IDS, {
    name: 'allPostIds',
    options: ({ sectionId }) => ({ variables: { id: sectionId } }),
  }),
)(Section);

export default SectionWithQuery;
