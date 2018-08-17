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
class PostShownBelow extends Component {
  lineToParagraph(text) {
    return text.split('/n').map(t => <p>{t}</p>).reduce((nodes, node) => nodes.concat(node), []);
  }
  render() {
    const { allPostIDs } = this.props;
    // const postIndex = allPostIDs.indexOf(allPostIDs.filter(p => p.id == this.props.postId)[0]);
    // const prevPost = allPostIDs[postIndex - 1] ? allPostIDs[postIndex - 1].id : undefined;
    // const nextPost = allPostIDs[postIndex + 1] ? allPostIDs[postIndex + 1].id : undefined;
    let Post;
    this.props.postData && ({ Post } = this.props.postData);
    return (
      this.props.postData ?
        this.props.postData.Post ?
          <Box justify='start' wrap={false} >
            <Box justify='start' align='center' colorIndex='light-2' pad='small'
              style={{ display: 'block' }}
            >
              <div>{this.lineToParagraph(Post.content)}</div>
            </Box>
          </Box>
          : <div />
        : <div />
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
})(PostShownBelow);
export default PostWithQuery;
