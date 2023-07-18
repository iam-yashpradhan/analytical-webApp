/* eslint-disable */

import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import { Button, Col, Form, Input, Row, Skeleton } from 'antd';
import React, { Suspense, useCallback, useState } from 'react'; 
import { Link, NavLink, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from 'react-svg';
import { AuthFormWrap } from './style';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { PageHeaderBanner } from '../../../../components/banners/Banners';


function SignIn() {
  

  return (
            <Row gutter={25}>
                <Col xs={24}>
                <Suspense
                    fallback={
                    <Cards headless>
                        <Skeleton active />
                    </Cards>
                    }
                >
                    <PageHeaderBanner
                    title="Welcome To Demo Dashboard"
                    subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
                    />
                </Suspense>
                </Col>
            </Row>
        
     
  
  );
}

export default SignIn;
