// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Container, Heading, Image } from 'styled-minimal';

type Props = {
    children?: any;
    onError?: (error: Error, componentStack: string) => void;
};

type ErrorInfo = {
    componentStack: string;
};

type State = {
    error: Error | null;
};

export default class ErrorHandler extends React.Component<Props, State> {
    public state: State = {
        error: null,
    };

    componentDidCatch(error: Error, info: ErrorInfo) {
        const { onError } = this.props;

        /* istanbul ignore else */
        if (typeof onError === 'function') {
            try {
                onError.call(this, error, info?.componentStack);
            } catch {
                // ignore
            }
        }

        this.setState({ error });
    }

    render() {
        const { children } = this.props;
        const { error } = this.state;

        if (error === null) {
            return children;
        }

        const message = error.toString();

        return (
            <Container cl="#fff" data-testid="ErrorHandler" fullScreen>
                <Image
                    alt="Error"
                    src={`${process.env.PUBLIC_URL}/media/images/error.gif`}
                />
                <Heading as="h3">{message}</Heading>
            </Container>
        );
    }
}
