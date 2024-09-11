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
    Col,
    Input,
    Button,
    UncontrolledTooltip,
    CardBody
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  
  const Verification = () => {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
              < CardHeader style={{ background:'purple'}}>
                
                <div style={{'float':'left' }}>
                
                <label for="exampleSelect"></label>
          <Input type="select" name="select" id="exampleSelect">
          
            <option>Select request ID</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
          </div>
          <div style={{'float':'right' }}>
          
                      <Button color="success">
                      Attachment
    </Button>
                      
                      
                      
                      </div>
                  <h3 className="mb-0"></h3>
                </CardHeader>
               <CardBody>
               
              
                      
                        
                      
               <form>
              <Row>
             
             <Col lg="3">
                      
                      <label>Vendor:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Permit no:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Requested By:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Department:</label>
              </Col>
              <br/>
              <br/>

              <Col lg="3">
                      
                      <label>Contact Number:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Cost center:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Complaint no:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Priority:</label>
              </Col>
              <br/>
              <br/>
              <Col lg="3">
                      
                      <label>Request Data:</label>
              </Col>

             
              
              <Col lg="3">
                      
                      <label>Completion Data:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Bin location with description:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Challan Number:</label>
              </Col>
             <br/>
             <br/>
              <Col lg="3">
                      
                      <label>Weight in Ton:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Contractor's Emp Name/Gate Pass No:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Material Type: </label>
                      
                      
                     </Col>
                     
                     <Col lg="3">
                      
                      <label>Feedback</label>
                      <Input type="select" name="select" id="exampleSelect">
          
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
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
                  Submit
                  </icon>
                </Button>
                </center>
                </Col>

              </Row>

              </form>
              </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Verification;
  