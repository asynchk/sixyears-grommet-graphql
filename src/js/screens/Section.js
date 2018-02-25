import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


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

import NavControl from '../components/NavControl';
import Section from '../components/Section/Section';
import Section2 from '../components/Section/Section2';

import { pageLoaded } from './utils';


class SectionScreen extends Component {
  componentDidMount() {
    pageLoaded('The Six Years');
  }
  componentWillUnmount() {
  }
  render() {
    const { match: { params }, history, layoutData } = this.props;
    console.log(this.props);
    let layout;
    let header;
    layoutData.Section && ({ layout, header } = layoutData.Section);
    console.log(layout);
    if (layout) {
    switch (layout) {
      case 1:
        return <Section sectionId={params.section} {...this.props} />;
      case 2:
        return <Section2 sectionId={params.section} {...this.props} />;
      default:
        return <Section sectionId={params.section} {...this.props} />;
    }
    } return <Section sectionId={params.section} {...this.props} />;
  }
}
const FETCH_LAYOUT_OF_A_SECTION = gql`
  query FETCH_LAYOUT_OF_A_SECTION($id: ID) {
    Section(id: $id)
    {
      id
      layout
      header
    }
  }
`;
const sectionID = document.location.pathname.split('/section/')[1];
console.log(sectionID)

const SectionScreenWithQuery = graphql(FETCH_LAYOUT_OF_A_SECTION, {
  name: 'layoutData',
  options: (props) => ({ variables: { id: sectionID}}),
})(SectionScreen);

export default SectionScreenWithQuery;

