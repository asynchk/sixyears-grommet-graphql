import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

import Anchor from 'grommet/components/Anchor';
import Tile from 'grommet/components/Tile';
import EditIcon from 'grommet/components/icons/base/Edit';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Card from 'grommet/components/Card';
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

const titleHeading = p => (
  <Heading
    strong
    tag='h3'
    style={{ marginTop: 8, marginBottom: 25 }}
  >
    {`${p.title} - ${p.author}` ||
    p.description ||
    `${p.content.split('。')[0]}。` ||
    `${p.content.substring(0, 25)} ...`}
  </Heading>
);
const PostCardsSection = ({ allSections }) => (
  allSections && allSections.filter(s => s.featured == 2).map(s => (
    s.posts.map(p => (
      <Tile
        onClick={() => window.location.pathname = `/post/${p.id}`}
        margin='medium'
      >
        <Card
          key={p.id}
          thumbnail={p.background ? p.background.src : null}
          textSize='medium'
          label={<Label><EditIcon /> {s.header}</Label>}
          heading={titleHeading(p)}
          link={<Anchor
            href={`/post/${p.id}`}
            label='Read More'
            icon={<LinkNextIcon />}
          />}
          colorIndex='light-1'
          style={{
            width: 330,
            // minHeight: 300
          }}
        />
      </Tile>
    ))
  ))
);

export default PostCardsSection;
