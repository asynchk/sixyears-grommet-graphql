import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

import Anchor from 'grommet/components/Anchor';

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


const CaroSection = ({ allSections }) => (
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
        <Carousel
          id={s.id}
          key={s.id}
          autoplaySpeed={8000}
          persistentNav={true}

        >
          {
            postEles.map(p => (
              <Box
                key={p.id}
                direction='row'
                justify='end'
                // full='horizontal'
                full={true}
                size={{
                  height: 'xlarge'
                }}
                pad='none'
                margin='none'
                colorIndex=''

              >

                <Box
                  direction='row'
                  justify='start'

                  basis='1/3'
                  size={{
                    width: {
                      min: 'small'
                    }
                  }}
                  pad='small'
                  margin='small'
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0

                  }}

                >
                  <Box
                    colorIndex='light-1'
                    basis='medium'
                    justify='between'
                    // flex={true}
                    pad='medium'
                    size={{
                      height: { max: 'xlarge' },
                      width: { min: 'small' }
                    }}
                    style={{
                      // borderStyle: 'solid',
                      borderRadius: 0,
                      marginLeft: 20,

                      // borderWidth: 10,
                      // borderColor: '#333',
                      // background: 'rgba(0,0,0,0.3)'
                    }}
                  >
                    {p.title !== sectionContent.title && <Heading tag='h3'>{p.title == sectionContent.title ? null : sectionContent.title}</Heading>}
                    <Heading tag='h2' strong >{p.title}</Heading>
                    {p.subheader && <Label uppercase>{p.subheader}</Label>}
                    <Box style={{ maxHeight: 350, overflow: 'auto', padding: 0, margin: 0 }}>
                      <Paragraph size='large' >{
                        p.description ?
                          p.description :
                          p.content ?
                            `${p.content.split('。')[0]}。` || `${p.content.substring(0, 25)} ...` :
                            null}
                      </Paragraph>
                    </Box>
                    {p.author && <Label uppercase>{p.author}</Label>}
                    <Anchor
                      href={`/section/${sectionContent.id}`}
                      label='All Posts'
                      icon={<LinkNextIcon />}
                    />
                  </Box>

                </Box>
                <Box
                  direction='cloumn'
                  justify='end'
                  //   basis='large'
                  basis='3/4'
                  size={{
                    width: {

                      min: 'large'
                    },
                    height: {
                      min: 'medium'
                    }
                  }}
                  //   pad='large'
                  // margin='none'
                  texture={`${location.origin}/${p.background.src}`}

                />
              </Box>
            ))
          }


        </Carousel>
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

export default CaroSection;
