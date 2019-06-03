import React, { Component, PropTypes } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Hero from 'grommet/components/Hero';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Article from 'grommet/components/Article';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Header from '../Header';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import WOW from 'wowjs';

import Post2 from '../Post/Post2';
import NavControl from '../NavControl';
import Footer from '../Footer';
import PostRedirected from '../Post/PostRedirected';

// Ten years later section
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPostId: '',
      chosenPostHeading: '',
      singlePost: false,
    };
  }
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  lineToParagraph(text) {
    return text.split('/n').map(t => <Paragraph size='medium' style={{ marginTop: 12, marginBottom: 12 }}>{t}</Paragraph>).reduce((nodes, node) => nodes.concat(node), []);
  }
  render() {
    let Section;
    if (this.props.sectionData && this.props.sectionData.Section) {
      ({ Section } = this.props.sectionData);
      const pid = Section.posts[0].id;
      const { length } = Section.posts;

      length < 2 && !this.state.singlePost && this.setState({
        chosenPostId: pid,
        singlePost: true,
      });
    }
    return (
      this.props.sectionData.Section ?
        this.props.sectionData.Section.posts.length > 1 ?
          <Article primary={true}>
            <Header direction='row' justify='between' size='medium'
              pad={{ horizontal: 'medium', between: 'small' }}
            >
              <NavControl />
            </Header>
            <Box
              direction='column'
              justify='start'
              align='stretch'
              wrap={true}
              colorIndex='light-1'
              pad='none'
            >
              <Box colorIndex='neutral-2' justify='center' align='stretch' pad='medium'>
                <Hero size='small'>
                  <Box direction='row' justify='center' align='center'>
                    <Box basis='large' align='start' pad='small'>
                      <Heading strong margin='small'>{Section.header}</Heading>
                      <Headline size='medium' margin='small'>{Section.description}</Headline>
                    </Box>
                  </Box>
                </Hero>
              </Box>
              <Columns masonry={true} maxCount={2} justify='center' responsive={true}>
                {Section && Section.posts.map(p => (
                  <Card
                    key={p.id}
                    margin='medium'
                    colorIndex='light-2'
                    label={<Heading tag='h4' size='medium'>{p.author}</Heading>}
                    className='wow bounceIn'
                    description={this.lineToParagraph(p.content)}
                    onClick={() => { console.log('haha'); }}
                  />))}
              </Columns>
            </Box>
            <Box justify='center' align='center' pad='medium'>
              <Post2 sectionHeader={Section.header} sectionDec={Section.description} postId={this.state.chosenPostId} />
            </Box>
            <Footer />
          </Article> :
          <PostRedirected postId={this.state.chosenPostId} {...this.props} />
        : <div />
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
                content
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

const SectionWithQuery = graphql(ALL_POST_IN_A_SECTION, {
  name: 'sectionData',
  options: ({ sectionId }) => ({ variables: { id: sectionId } }),
})(Section);

export default SectionWithQuery;
