import React from 'react';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';

const FooterEle = () => (
  <Footer justify='between'>
    <Title>
      <Title />
            The Six Years
    </Title>
    <Box direction='row'
      align='center'
      pad={{ between: 'medium' }}>
      <Paragraph margin='none'>
                © 2018 AsyncHK, A Flying Production
      </Paragraph>
      <Menu direction='row'
        size='small'
        dropAlign={{ right: 'right' }}>
        <Anchor href='#'>
                    Support
        </Anchor>
        <Anchor href='#'>
                    Contact
        </Anchor>
        <Anchor href='#'>
                    About
        </Anchor>
      </Menu>
    </Box>
  </Footer>
);
export default FooterEle;

