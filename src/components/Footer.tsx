// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Box, Container, Flex } from 'styled-minimal';

function Footer() {
    return (
        <Box as="footer">
            <Container>
                <Flex>
                    <iframe
                        frameBorder="0"
                        height="20px"
                        scrolling="0"
                        src="https://ghbtns.com/github-btn.html?user=gilbarbara&repo=react-redux-saga-boilerplate&type=star&count=true"
                        title="GitHub Stars"
                        width="110px"
                    />
                    <iframe
                        frameBorder="0"
                        height="20px"
                        scrolling="0"
                        src="https://ghbtns.com/github-btn.html?user=gilbarbara&type=follow&count=true"
                        title="GitHub Follow"
                        width="130px"
                    />
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;
