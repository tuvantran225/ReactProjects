import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Input, Nav, NavItem, 
    NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import LeftHeader from './LeftHeader';
import LeftBody from './LeftBody';

class AccessControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1'
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        const { activeTab } = this.state;
        if(activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const { activeTab } = this.state;
        return (
            <Container fluid className="mt-3">
                <Row>
                    <Col md="7">
                        <Card id="left-card">
                            <CardHeader>
                                <LeftHeader />
                            </CardHeader>
                            <CardBody>
                                <LeftBody />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="5">
                        <Card id="right-card">
                            <CardHeader>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >
                                            Tab1
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >
                                            Tab2
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { this.toggle('3'); }}
                                        >
                                            Tab3
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { this.toggle('4'); }}
                                        >
                                            Tab4
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Row className="mt-3">
                                    <Col md="6">
                                    <Input
                                        type="search"
                                        name="search"
                                        id="exampleSearch"
                                        placeholder="Search users"
                                        />
                                    </Col>
                                    <Col md="2" className="offset-3">
                                        <Button color="secondary">secondary</Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col sm="12">
                                            <h4>Tab 1 Contents</h4>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col sm="12">
                                            <h4>Tab 2 Contents</h4>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Row>
                                            <Col sm="12">
                                            <h4>Tab 3 Contents</h4>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Row>
                                            <Col sm="12">
                                            <h4>Tab 4 Contents</h4>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                </Container>
        );
    }
}

export default AccessControl;