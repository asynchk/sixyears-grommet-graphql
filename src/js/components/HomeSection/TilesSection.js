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
import Columns from 'grommet/components/Columns';

const TilesSection = ({ allSections, isShowAll, onPress }) => (
  allSections && allSections.filter(s => s.featured == 5).map(s => (
    <Section
      key={s.id}
      pad='none'
    >
      <Box style={{ height: 400 }} />
      <Box colorIndex='light-2'>
        <Columns
          maxCount={3}
          responsive={true}
          masonry={true}
          justify='center'
          style={{
            marginTop: -250,
            flexWrap: window.innerWidth > 575 ? 'wrap-reverse' : 'wrap',
            alignItems: window.innerWidth > 575 ? 'flex-end' : 'flex-start',
            flexDirection: 'row',
            paddingBottom: 20,
          }}
        >
          <Box pad='medium'>
            <Card
              pad='none'
              headingStrong={true}
              textSize='small'
              thumbnail={s.background.src}
              heading={s.header}
              colorIndex='light-1'
              onClick={onPress}
              description={
                <Paragraph>
                  {s.description}
                </Paragraph>}
              link={<Anchor
                href={`/section/${s.id}`}
                label='All Posts'
                icon={<LinkNextIcon />}
              />}
              style={{
                order: -1,
                width: 330
              }}
            />
          </Box>
          {
            s.posts.filter((p, i) => isShowAll || i < 2).map(p => (
              <Box
                pad='medium'
                key={p.id}
              >
                <Card
                  pad='none'
                  size='medium'
                  headingStrong={false}
                  textSize='medium'
                  thumbnail={p.background.src}
                  heading={<Heading strong tag='h3'>{p.title}</Heading>}
                  colorIndex='light-1'
                  description={
                    <Paragraph>
                      {`${p.content.split('。')[0]}。` || `${p.content.substring(0, 25)} ...`}
                    </Paragraph>}
                  style={{
                    width: 330,
                    transition: 'box-shadow .3s ease-out, transform .3s ease-out'
                  }}
                />
              </Box>
            ))
          }
        </Columns>
      </Box>
    </Section>
  ))
);

export default TilesSection;
