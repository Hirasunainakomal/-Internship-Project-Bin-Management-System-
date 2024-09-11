// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    CardBody,
    Form,
  FormGroup,
  Input,
  Col,
  Button,
 } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  
  const Execution = () => {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                
                <CardHeader style={{ background:'purple'}}>
                <h1 class="font-weight-bold text-white"><center>Job Assignment</center></h1>
                  <h3 className="mb-0"></h3>
                
                  
                </CardHeader>
               <CardBody>
               <Form>
                  
                  <div className="pl-lg-2">
                    <Row>
                      
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>---Select Plant---</option>
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
                            htmlFor="input-first-name"
                          >
                            
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>---Select Bin Location---</option>
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
                            htmlFor="input-last-name"
                          >
                            
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>---Select Scrap Type---</option>
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
                            htmlFor="input-last-name"
                          >
                            
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>---Select Request id---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      </Row>
                      </div>
                      <br/>
                     <Row>
                      <Col lg="3">
                      
                      <label>Requested By:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Type:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Loding Point:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Unloading Point:</label>
              </Col>
              </Row>
              <br/>
              
              <Row>
              <Col lg="3">
                      <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Vechicle Number
                          </label>
                          <Input type="select" name="select" id="exampleSelect">
          
                            <option>---Select---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                      
                      <label type="number" id="exampleSelect">Challan Number</label>
                      <Input>
                      </Input>
              </Col>
              <Col lg="3">
                      
                      <label type="number" id="exampleSelect">Work Permit Number</label>
                      <Input>
                      </Input>
              </Col>
              
              <Col lg="3">
                      
                      <label type="number" id="exampleSelect">Work order/arc number</label>
                      <Input>
                      </Input>
              </Col>
              </Row>
              <br/>
              <br/>
              
              <Row>
                <Col>
                <center>
                <Button color="primary">
                  <icon className="ni ni-send text-white">
                  Assign job 
                  </icon>
                </Button>
                </center>
                </Col>

              </Row>
              </Form>
               </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Execution;