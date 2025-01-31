import React from 'react';
import { Row, Col, Card, Avatar, Divider} from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import Collage from './Collage';
const { Meta } = Card;

function AboutMe() {
    return (
        <>
            <Row className="about-me" id="about-me" justify="space-around" align="middle" gutter={[0, 24]}>
                <Divider orientation="left">About Me</Divider>           
                <Col xs={{ span: 24}} lg={{ span: 6 }}>
                    <Card
                        hoverable={true}
                        actions={[
                            <a href="https://www.linkedin.com/in/carlos-noe-ojeda-ang"><LinkedinOutlined key="linkedin" /></a>,
                            <a href="https://github.com/Carlos-Ojeda"><GithubOutlined key="github" /></a>,
                            <a href="mailto:carlosnoel_ojedaa@icloud.com"><MailOutlined key="email" /></a>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://avatars.githubusercontent.com/u/71744365?v=4" />}
                            title="Hi! I'm Carlos 👋🏼"
                            description="I am a 21 year-old human being passionate about nature, people and technology. I really enjoy working with people, developing front-end, automated testing and back-end (when a challenging job comes up). Most of all, I love when me and my colleges grow by learning new things."
                        />
                    </Card>
                </Col>
                <Col xs={{ span: 24}} lg={{ span: 12 }}>
                    <Collage/>
                </Col>
            </Row>
        </>
    );
  }
  
  export default AboutMe;