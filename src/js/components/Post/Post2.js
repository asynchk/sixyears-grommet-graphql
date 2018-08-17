import React, { Component } from 'react';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

// TO THE WORLD POSTS
class PostToTheWorld extends Component {
  lineToParagraph(text) {
    return text.split('/n').map(t => <p>{t}</p>).reduce((nodes, node) => nodes.concat(node), []);
  }
  render() {
    const { allPostIDs } = this.props;
    const postIndex = allPostIDs && allPostIDs.indexOf(allPostIDs.filter(p => p.id == this.props.postId)[0]);
    const prevPost = allPostIDs && allPostIDs[postIndex - 1] ? allPostIDs[postIndex - 1].id : undefined;
    const nextPost = allPostIDs && allPostIDs[postIndex + 1] ? allPostIDs[postIndex + 1].id : undefined;
    let Post;
    this.props.postData && ({ Post } = this.props.postData);
    return (
      this.props.postData ?
        this.props.postData.Post ?
          <Box justify='start' wrap={false} >
            <Box justify='center' margin='medium'>
              <Box direction='row' justify='center' align='center'>
                <Heading margin='none'>
                  {Post.title}
                </Heading>
              </Box>
            </Box>
            <Box direction='row' justify='between' margin='medium'>
              {prevPost ?
                <Anchor
                  label='Previous'
                  onClick={() => this.props.setIDFunction(prevPost)}
                  icon={<LinkPreviousIcon />}
                /> : <div />}
              {nextPost ?
                <Anchor
                  label='Next'
                  reverse
                  onClick={() => this.props.setIDFunction(nextPost)}
                  icon={<LinkNextIcon />}
                /> : <div />}
            </Box>
            <Box justify='start' align='center' colorIndex='light-2' pad='small'
            style={{display: 'block'}}
            >
              <div>{this.lineToParagraph(Post.content)}</div>
            </Box>
            <Box direction='column' justify='start'
              style={{ display: 'block' }}
            >
              {Post.background && Post.background.src &&
                <Box basis='large' margin='small'>
                <Image
                  src={`${window.location.origin}/${Post.background.src}`}
                  size='large'
                  // fit='contain'
                />
                </Box>
              }
              {Post.images && Post.images.map(i => (
                <Box basis='large' margin='small'>
                <Image
                  src={`${window.location.origin}/${i.src}`}
                  size='large'
                  // fit='contain'
                  />
                </Box>))}
            </Box>
            
          </Box>
          :
          <Hero size='small'>
            <Box direction='row' justify='center' align='center'>
              <Box basis='1/2' align='start' pad='medium'>
                <Heading margin='none'>{this.props.sectionHeader}</Heading>
              </Box>
              <Box align='start' pad='medium'>
                <p>
                  {this.props.sectionDec ? this.props.sectionDec : 'Press A Post And Start Reading'}
                </p>
              </Box>
            </Box>
          </Hero> : <div />
    );
  }
}

const FETCH_A_POST_BY_ID = gql`
    query FETCH_A_POST_BY_ID($id: ID) {
  Post(id: $id) {
    id
    author
    title
    subheader
    description
    content
    isPublished
    background {
      id
      src
    }
    images {
      id
      title
      src
      description
    }
  }
}
`;
const PostWithQuery = graphql(FETCH_A_POST_BY_ID, {
  name: 'postData',
  options: ({ postId }) => ({ variables: { id: postId } }),
})(PostToTheWorld);
export default PostWithQuery;
