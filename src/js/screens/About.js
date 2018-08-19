import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from '../components/Footer';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Meter from 'grommet/components/Meter';
import Notification from 'grommet/components/Notification';
import Value from 'grommet/components/Value';
import Spinning from 'grommet/components/icons/Spinning';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';
import Title from 'grommet/components/Title';
// import {
//     loadTask, unloadTask
// } from '../actions/tasks';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import AddCircleIcon from 'grommet/components/icons/base/AddCircle';
import { pageLoaded } from './utils';

// import Notification from 'grommet/components/Notification';
class Task extends Component {
  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
  }

  render() {
    const { error, task } = this.props;

    let errorNode;
    let taskNode;


    return (
      <Article primary={true} full={true}>
        <Header
          direction='row'
          size='medium'
          colorIndex='light-2'
          align='center'
          responsive={false}
          pad={{ horizontal: 'small' }}
        >
          <Anchor path='/'>
            <LinkPrevious a11yTitle='Back to Home' />
          </Anchor>
          <Title margin='none' size='small' strong={true}>
                        關於六年
          </Title>
        </Header>


        <Notification message='還在開發中'
          state='感謝你的支持，這一頁還在開發中，請稍後再來。'
          // timestamp={{}}
          status='warning'
          percentComplete={30} />
        <Section>
          <Image src='/img/logo_big.png' />

          <Box
            pad='medium'
          >
            <Title>
            關於 六年 The Six Years
            </Title>
            <Paragraph>
                        你說過的六年。Logo取材自母校，以幾何圖形展現。回首仰望，輪廓已經不再那麼立體分明。
            </Paragraph>
            <Paragraph>
                        六年是中學生活的時間。亦是我們歡散後之後的歲月。
            </Paragraph>


          </Box>
          <Box
            pad='medium'
          >
            <Title>
            贊助
            </Title>
          </Box>

          <Box direction='row'
            justify='start'
            align='center'
            wrap={false}
            pad='small'
            //   margin='small'
            colorIndex='light-1'
          >
            <Box
              align='center'
              margin='small'
            >
              <Image src='/img/about/bananapeels.jpg'
                style={{
                  height: 150,
                  width: 150,
                }}
              />
              <Anchor href='https://www.facebook.com/bananapeelHK/'
                label='Banana Peels' />

            </Box>
            <Box
              align='center'

              margin='small'
            >
              <Image src='/img/about/henryip.png'
                style={{
                  height: 150,
                  width: 150,
                }}
              />
              <Anchor href='https://www.henryipsh.com/'
                label='henryipsh.com' />

            </Box>
            <Box
              align='center'

              margin='small'
            >
              <Box
                align='center'
                justify='center'
                alignContent='center'
                colorIndex='neutral-1'

                style={{
                  height: 150,
                  width: 150,
                }}
              >
                <AddCircleIcon size='medium' />
              加入贊助
              </Box>
              {/* <Anchor href=''
                label='henryipsh.com' /> */}

            </Box>
          </Box>
          <Box
            pad='medium'
          >
            <Title>
            開發
            </Title>
          </Box>

          <Box direction='row'
            justify='start'
            align='center'
            wrap={false}
            pad='small'
            //   margin='small'
            colorIndex='light-1'
          >
            <Box
              align='center'
              margin='small'
            >
              <Image src='/img/about/flying.png'
                style={{
                  height: 150,
                  width: 150,
                }}
              />
                        <Anchor href='https://www.facebook.com/hjonff/'
                label='A Flying Production' />

            </Box>
                    <Box
                        align='center'
                        margin='small'
                    >
                        <Image src='/img/about/async.png'
                            style={{
                                height: 150,
                                width: 150,
                            }}
                        />
                        <Anchor href='http://async.hk'
                            label='Async.HK' />

                    </Box>
                    <Box
                        align='center'
                        margin='small'
                    >
                        <Image src='/img/about/brent.png'
                            style={{
                                height: 150,
                                width: 150,
                            }}
                        />
                        <Anchor
                        
                            label='Brent Leung' />

                    </Box>
          </Box>
        </Section>
        <Footer ref='home' />

      </Article>
    );
  }
}

Task.defaultProps = {
  error: undefined,
  task: undefined
};

Task.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  match: PropTypes.object.isRequired,
  task: PropTypes.object
};

const select = state => ({ ...state.tasks });

export default connect(select)(Task);
