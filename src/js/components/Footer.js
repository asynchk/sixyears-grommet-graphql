import React from 'react';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';

const FooterEle = () => (
  <Footer
  full='horizontal'
  justify='between'
  pad='medium'
  size='medium'
  colorIndex='grey-3'
  >
    <Title>
      {/* <Title /> */}
      <Header onClick={()=> {window.location.pathname='/'}} size='small'>The Six Years</Header>
    </Title>
    <Box direction='row'
      align='center'
      pad={{ between: 'medium' }}>
      
      <Menu direction='row'
        size='small'
        dropAlign={{ right: 'right' }}>
        <Anchor href='/about'>
          關於六年
        </Anchor>
        {/* <Anchor href='#'>
                    Contact
        </Anchor>
        <Anchor href='#'>
                    About
        </Anchor> */}
      </Menu>
      <Paragraph size='small' margin='none'>
        © 2018 <a href="http://async.hk">AsyncHK</a>, A Flying Production
      </Paragraph>
    </Box>
  </Footer>
);
export default FooterEle;

