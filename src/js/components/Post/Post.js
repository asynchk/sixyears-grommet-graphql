import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';

import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

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
import NavControl from '../NavControl';
import Footer from '../Footer';

class Post extends Component {
    lineToParagraph(text) {
        return text.split('/n').map(t => <p>{t}</p>).reduce((nodes, node)=> nodes.concat(node),[]);
    }

  render() {
    console.log(this.props);
    let Post;
    this.props.postData && ({ Post } = this.props.postData);
    return (
        this.props.postData?
      this.props.postData.Post ?
          <Article primary={true}>
            <Header
              direction='row'
              justify='between'
              size='large'
              pad={{ horizontal: 'medium', between: 'small' }}
            >
              <NavControl />
            </Header>
            <Hero
              background={<Image src={`${location.origin}/${Post.background.src}`} fit='cover' full />}
              size='small'

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
                    {Post.title}
                  </Heading>
                </Box>
              </Box>
            </Hero>
            <Box
              
              justify='start'
              align='center'
              wrap={true}
              colorIndex='light-2'
              pad='small'
                        style={{ whiteSpace: "pre-line"}}
                  >
                  <div>
                        {this.lineToParagraph(Post.content)}
                    </div>
            </Box>
            <Footer />
          </Article> :
                <Spinning /> :
            <Spinning />
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
})(Post);

export default PostWithQuery;
