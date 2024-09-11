import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  handleSelect,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  FormGroup,
  calender,
  Form,
  Input,
  option,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  select,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";
import PropTypes from 'prop-types';

import Header from "components/Headers/Header.js";
import { render } from "react-dom";
import Bin from "./examples/Bin";
import Bincleandata from "views/examples/Bincleandata";
import reactRouterDom from "react-router-dom";






class index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      plantID:'',
      showBinsMis:true,
      showBinCleanData:false,
      dailyMIS:false,
      FYdata:false,
      btnColor1:'primary',
      btnColor2:'light',
      btnColor3:'light',
      btnColor4:'light'

    }
  }
}
function Index({ direction, ...args }) 
{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
    <>
      <Header/>
      {/* Page content */}
      
      <Container className="mt--7" fluid>
        <Row className="mt-1">
          <Col className="mb-5 mb-xl-4" xl="12">
            <Card className="bg-gradient-white shadow">
            <CardHeader style={{ background:'purple'}}>
              <div style={{'float':'left' }}>
              <Button 
                    className="mr-4"
                    color="white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="md"
                  >
                    Bin Details
                  </Button>
                  
                  <Button
                  className="mr-4"
                    color="white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="md"
                  >
                    Bin clean data
                  </Button>
                  
                  
                  <Button
                    className="mr-4"
                    color="white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="md"
                  >
                    MIS Data
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
              <Form>
                  
                  <div className="d-flex p-5">
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                            >
                             Plant
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                            >
                            Bin loading Point
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                          
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Material type
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                          
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Bin Unloading Point
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                          
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Vendor
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                          
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Cost center
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                          
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Work Order Number
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                          
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Vehicle No.
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                          
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                      <FormGroup>
                      <label>Date Range</label>
                      
                      <Input
                        className="form-control-alternative"
                        placeholder="04/27/2023 - 05/27/2023"
                        rows="4"
                        defaultValue="SELECT"
                        type="date"
                      />
                    </FormGroup>
                    </Col>
                    </Row>
                    
                    </div>
                    </Form>
                    
              </CardBody>
              </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
} ;

  

export default Index;
