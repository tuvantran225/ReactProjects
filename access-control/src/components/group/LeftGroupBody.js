import React, { Component } from 'react';
import { Row, Col, Card, CardTitle } from 'reactstrap';
import Group from './Group';

class LeftGroupBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <Row>
                <Col md="5">
                    <Card body id="left-group">
                        <CardTitle>
                            Frank
                        </CardTitle>
                        <CardTitle>
                            Frank
                        </CardTitle>
                        <CardTitle>
                            Frank
                        </CardTitle>
                        <CardTitle>
                            Frank
                        </CardTitle>
                        <CardTitle>
                            Frank
                        </CardTitle>
                    </Card>
                </Col>
                <Col md="7">
                    <Group />
                    <Group />
                    <Group />
                </Col>
            </Row>
        );
    }
}

export default LeftGroupBody;