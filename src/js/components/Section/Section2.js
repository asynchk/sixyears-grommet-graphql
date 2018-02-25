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
import Post2 from '../Post/Post2';
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
import Split from 'grommet/components/Split';
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenPostId: "",
            chosenPostHeading: "",
        }
    }
    render() {
        console.log(this.props);
        let Section;
        if (this.props.sectionData && this.props.sectionData.Section) {
            ({ Section } = this.props.sectionData)
            const pid = Section.posts[0].id;
            const { length } = Section.posts;
            length < 2 && this.props.history.push(`/post/${pid}`, this.props.sectionData.Section)
        }

        // this.props.sectionData.Section &&
        // ßthis.props.sectionData.Section.posts.length == 1 && this.props.history.push(`post/${this.props.sectionData.Section.posts[0].id}`, this.props.sectionData.Section)
        return(
            this.props.sectionData.Section?
                this.props.sectionData.Section.posts.length > 1 ? 
            <Article primary={true}>
                <Header
                    direction='row'
                    justify='between'
                    size='large'
                    pad={{ horizontal: 'medium', between: 'small' }}
                >
                    <NavControl />
                </Header>
                
                        <Split separator={true}
                            priority='left'
                            flex='right'
                            >
                <Box
                    direction='column'
                    justify='start'
                    align='stretch'
                    wrap={true}
                    colorIndex='light-2'
                    pad='small'
                >
                                <Box colorIndex='neutral-2'
                                    justify='center'
                                    align='stretch'
                                    pad='medium'
                                    // style={{ marginBottom: 10, maxWidth: 350, maxHeight: 400}}
                                >
                             
                                <Hero
                                    // background={<Image src={`${location.origin}/${Section.background.src}`} fit='cover' full />}
                                    size="small"


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
                                                {Section.header}
                                            </Heading>
                                        </Box>
                                    </Box>
                                </Hero>
  </Box>
                    {
                        Section && Section.posts.map(p => (
                            <Card
                                key={p.id}
                                thumbnail={`${location.origin}/${p.background.src}`}
                                label={p.author}
                                heading={p.title}
                                description={p.description}
                                            onClick={()=>{
                                                if (window.innerWidth > 716) {
                                                this.setState({
                                                    chosenPostId: p.id,
                                                    
                                                })} else {
                                                    window.location = `/post/${p.id}`;
                                                }}}
                                link={<Anchor
                                    href={`/post/${p.id}`}
                                    style={{ display: window.innerWidth >716? 'none' : 'block'}}
                                // label='Go To Section'
                                    icon={<LinkNextIcon />}
                                />}
                            />))
                    }
                </Box>
                            <Box
                            // colorIndex='neutral-2'
                                justify='center'
                                align='center'
                                pad='medium'>
                                <Post2 sectionHeader={Section.header} postId ={this.state.chosenPostId}/>
  </Box>
                        </Split>
                <Footer />
            </Article>:
                    <Spinning />:
                    <Spinning />
        )
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

const SectionWithQuery = graphql(ALL_POST_IN_A_SECTION, {
    name: 'sectionData',
    options: ({ sectionId }) => ({ variables: { id: sectionId } }),
})(Section);

export default SectionWithQuery;
