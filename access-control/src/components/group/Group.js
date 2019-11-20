import React, { Component } from 'react';
import { Card, CardBody, Button, Collapse, CardText } from 'reactstrap';

class Group extends Component {
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
            <div className="mt-1">
                <Button color="primary" onClick={this.toggle}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <CardText>
                                Task 1
                            </CardText>
                            <CardText>
                                Task 2
                            </CardText>
                            <CardText>
                                Task 3
                            </CardText>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default Group;