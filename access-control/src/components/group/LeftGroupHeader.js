import React, { Component } from 'react';
import { Row, Col, CardTitle, Input, Label } from 'reactstrap';

class LeftGroupHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CardTitle>
                    <strong>PACMAN</strong> ACCESS CONTROL
                </CardTitle>
                <Row>
                    <Col md="5">
                    <Input
                        type="search"
                        name="search"
                        id="exampleSearch"
                        placeholder="Search users"
                    />
                    </Col>
                    <Col md="4" className="offset-2">
                        <Label for="exampleSearch">Frank Tran Van Tu</Label>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LeftGroupHeader;