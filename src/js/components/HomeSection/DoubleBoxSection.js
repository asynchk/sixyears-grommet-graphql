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
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import { getMessage } from 'grommet/utils/Intl';
import Carousel from 'grommet/components/Carousel';

const CaroSection = ({ allSections }) => (
  allSections && allSections.filter(s => s.featured == 1).map(s => (
    <Section
      id={s.id}
      pad='none'
      key={s.id}

    >
      <Box
        full='horizontal'
        direction='row'
        justify='center'
        size={{
          height: 'xlarge'
        }}
        colorIndex='light-2'
      >
        <Box
          direction='row'
          justify='end'
          full='horizontal'
          style={{
            position: 'relative'
          }}
        //   basis='xxlarge'
        >
          <Box
            style={{ zIndex: 1 }}
            pad='medium'
            basis='large'
            align='center'
            justify='center'
            
            pad='medium'
          >
            <Card label={s.subheader}
              textSize='small'
              colorIndex='light-1'
              headingStrong={true}
              size={{
                  width: 'large'
              }}
              heading={s.header}
              description={<Paragraph>{s.description}</Paragraph>}
              link={<Anchor href={`${location.origin}/section/${s.id}`}
                label='Read More'
                icon={<LinkNextIcon />}
              />
              }
              contentPad='large'
              pad='large'
            />
          </Box>

          <Box
            size='xxlarge'
            texture={`${location.origin}/${s.background.src}`}
            style={{
              position: window.innerWidth > 716 ? 'absolute' : 'relative',
              marginTop: window.innerWidth > 716 ? 0 : -70,
              minHeight: 300,
              left: 0,
              top: 0,
              height: '110%',
              zIndex: 0,
              overflow: 'visible',
              maxHeight: 'unset',
              width: window.innerWidth > 1200 ? '70%' : undefined

            }}
          />
        </Box>
      </Box>
    </Section>
  ))
);

export default CaroSection;
