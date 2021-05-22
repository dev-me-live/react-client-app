/* eslint-disable spaced-comment,@typescript-eslint/ban-ts-comment */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Container, responsive, Text } from 'styled-minimal';

import { spacer } from '../modules/theme';

import config from '../config';
import { STATUS } from '../literals';

import { login } from '../actions';

import Background from '../components/Background';
import Icon from '../components/Icon';
import Logo from '../components/Logo';

import { StoreState } from '../types';

const Header = styled.div`
    margin-bottom: ${spacer(3)};
    text-align: center;

    svg {
        height: 10rem;
        width: auto;

        ${
            /* sc-custom '@media-query' */ responsive({
                lg: {
                    height: '15rem',
                },
            })
        };
    }
`;

const Heading = styled.h1`
    color: #fff;
    font-size: 3.5rem;
    line-height: 1.4;
    margin-bottom: ${spacer(3)};
    margin-top: 0;
    text-align: center;

    ${
        /* sc-custom '@media-query' */ responsive({
            lg: {
                fontSize: '4rem',
            },
        })
    };
`;

function Home() {
    const dispatch = useDispatch();
    const status = useSelector<StoreState>(({ user }) => user.status);

    const handleClickLogin = () => {
        dispatch(login());
    };

    // @ts-ignore
    return (
        <Background key="Home" data-testid="Home">
            <Container fullScreen>
                <Header>
                    <Logo />
                </Header>
                <Heading>{config.name}</Heading>
                <Button
                    busy={status === STATUS.RUNNING}
                    data-testid="Login"
                    onClick={handleClickLogin}
                    size="xl"
                    textTransform="uppercase"
                    variant="white"
                >
                    <Icon name="sign-in" />
                    <Text ml={2}>Start</Text>
                </Button>
            </Container>
        </Background>
    );
}

export default Home;
