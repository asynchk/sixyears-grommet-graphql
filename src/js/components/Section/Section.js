import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import FormDownIcon from 'grommet/components/icons/base/FormDown';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import PostHori from '../Post/PostHori';
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

import Post from '../Post/Post';

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
            if (length < 2) {
                // this.props.history.push(`/post/${pid}`, this.props.sectionData.Section)
                return (<Post postId={pid} {...this.props} />)
            }
            this.state.chosenPostId == "" && this.setState({ chosenPostId: pid })
        }
        

        // this.props.sectionData.Section &&
        // ßthis.props.sectionData.Section.posts.length == 1 && this.props.history.push(`post/${this.props.sectionData.Section.posts[0].id}`, this.props.sectionData.Section)
        return(
            this.props.sectionData.Section?
                this.props.sectionData.Section.posts.length > 1 ?
            <Article primary={true}>
                <Header />
                {/* <Hero
                    background={<Image src={`${location.origin}/${Section.background.src}`} fit='cover' full />}
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
                </Hero> */}
                <Box
                    direction='column'
                    justify='start'
                    align='center'
                    wrap={true}
                    colorIndex='light-2'
                    // pad='small'
                    full='horizontal'
                    size={{
                        height: {min: 'small'}
                    }}
                    style={{
                        overflowX: 'auto',
                        height: 250,
                        alignContent: 'start'
                        // padding: 10,
                    }}
                >
                    {
                        Section && Section.posts.map(p => {
                            console.log(p)
                                    const chosen = p.id == this.state.chosenPostId;
                            return (
                                <Box
                                    pad='none'
                                    margin='none'
                                >
                            <Box
                                key={p.id}
                                        texture={chosen || !p.background ? '' : `${location.origin}/${p.background.src}`}
                                // label={p.author}
                                // heading={<Header>{p.title}</Header>}
                                // description={p.description}
                                // link={<Anchor
                                //     href={`/post/${p.id}`}
                                //     label='Go To Section'
                                //     icon={<LinkNextIcon />}
                                // />}
                                align='center'
                                justify='center'

                                colorIndex='light-1-a'
                                // size='small'
                                pad='small'
                                margin='small'
                                        onClick={() => {
                                            // if (window.innerWidth > 716) {
                                                this.setState({
                                                    chosenPostId: p.id,

                                                })
                                            // } else {
                                            //     window.location = `/post/${p.id}`;
                                            // }
                                        }}
                                    style={{
                                        height: 200,
                                        width: 220,
                                        marginBottom: 5,

                                        boxShadow: chosen?'0 0px 16px 0 rgba(0,0,0,.12)': ''
                        }}

                >
                            <Heading size='small' tag='h2'>
                                            {chosen || !p.background ? p.title || p.author || '無題' : ''}
                            </Heading>
                            
                            </Box>
                                    {
                                    chosen && <Box
                                    align='center'
                                    >
                                        <FormDownIcon />
                                    </Box>}
                            </Box>
                        
                        )})
                    }
                </Box>
                <Box>
                            <PostHori postId={this.state.chosenPostId} />
                </Box>
              
                <Footer />
            </Article>:
                    <div />:
                    <div />
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
