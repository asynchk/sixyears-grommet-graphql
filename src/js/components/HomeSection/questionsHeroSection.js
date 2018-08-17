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

import Columns from 'grommet/components/Columns';

import Section from 'grommet/components/Section';
// import Footer from '../components/Footer';
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


const QuestionsHeroSection = ({ allSections }) => (
  allSections.allSections && allSections.allSections.length > 0 && allSections.allSections.filter(s => s.featured == 6).map(s => (
    <Section
      id={s.id}
      key={s.id}
      pad='none'
      texture={s.background.src}
    >
      <Box
        pad='large'
        colorIndex='grey-4-a'
        align='center'
        justify='center'
        basis='xlarge'
        style={{
          paddingLeft: 0,
          paddingRight: 0
        }}
      >
        <Heading strong >{s.header}</Heading>
        <Label uppercase>{s.subheader}</Label>
        <Headline strong size='small'>{s.description}</Headline>
        <Box
          full='horizontal'
          style={{
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          <Box
            direction='column'
            responsive={false}
            full={false}
            // full='horizontal'
            wrap={true}
            // full='false'
            justify='start'
            // responsive={true}
            style={{
              // display: 'block',


              overflowX: 'auto',
              overflowY: 'hidden',
              display: 'flex',
              height: 300,

              width: '100%'

            }}

          >
            <Box

              pad='medium'
              margin='small'
              // size={{
              //   height: 'small',
              //   width: 'medium'
              // }}
              // basis='small'
              // colorIndex='light-2'

              style={{
                width: 100,
                height: 250,
                // display: 'inline-block',
                // flexDirection: 'unset',
                // flexWrap: 'unset',
                // float: 'left',
                // display: 'table-cell',
                // float: 'left'
              }}

            />

            {
              s.posts.map(p => (
                <Box

                  pad='medium'
                  margin='small'
                  // size={{
                  //   height: 'small',
                  //   width: 'medium'
                  // }}
                  // basis='small'
                  colorIndex='light-2'
                  key={p.id}
                  style={{
                    width: 250,
                    height: 250,
                    // display: 'inline-block',
                    // flexDirection: 'unset',
                    // flexWrap: 'unset',
                    // float: 'left',
                    // display: 'table-cell',
                    // float: 'left'
                  }}

                >

                  <Paragraph
                    size='large'
                  >
                    {`${p.content.split('。')[0]}。` || `${p.content.substring(0, 25)} ...`}
                  </Paragraph>
                </Box>
              ))
            }
            <Box

              pad='medium'
              margin='small'
              // size={{
              //   height: 'small',
              //   width: 'medium'
              // }}
              // basis='small'
              colorIndex='neutral-1'

              style={{
                width: 250,
                height: 250,
                // display: 'inline-block',
                // flexDirection: 'unset',
                // flexWrap: 'unset',
                // float: 'left',
                // display: 'table-cell',
                // float: 'left'
              }}

            >

              <Paragraph
                size='large'
              >你又有甚麼想法？
              </Paragraph>
              <Anchor
                href={`/section/${s.id}`}
                label='Read More'
                icon={<LinkNextIcon />}
              />
            </Box>

          </Box>
        </Box>
        <Anchor
          href={`/section/${s.id}`}
          label='Read More'
          icon={<LinkNextIcon />}
        />


      </Box>
    </Section>
  ))
);

export default QuestionsHeroSection;
