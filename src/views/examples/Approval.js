
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
  select,
  checkbox,
  Input,
  Container,
  option,
  Row,
  UncontrolledTooltip,
  CardBody,
  Dropdown,
  Col,
  Button,
  label
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Approval = () => {
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
              
              <h1 className="mb-0"></h1>
                
                
                <Col lg="3">
                 <label for="exampleSelect"></label>
          <Input type="select" name="select" id="exampleSelect">
          
            <option>Select request ID</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
          </Col>
          </CardHeader>
          <CardBody>
          <form>
          <div className="pl-lg-2">
            
              <Row>
             <Col lg="3">
                      
                      <label>Vendor:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Department:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Bin location:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Material Type:</label>
              </Col>
            </Row>
            </div>
              <br />
              <br/>
              
             <Row>
              <Col lg="3">
                      
                      <label>request id:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Approved By:</label>
              </Col>
              <Col lg="4">
                      
                      <label>Unloading Point:</label>
              </Col>
              <br />
              <br/>
              <br/>
              <Col lg="3">
                      
                      <label>Scheduled Date:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Requested Data:</label>
              </Col>
              <Col lg="3">
                      
                      <label>Requested By: </label>
                      
                      0
                     </Col>
                     <Col lg="3">
                      
                      <label>Contact:</label>
              </Col>
              </Row>

              <br />
              <br/>
              <br/>
              <Row>
             <Col> 
          <label check>
            <Input type="checkbox"/>
            <p> i have read the circular nose:VP TQM& SS/749/2020 dated 07.01.2020 and understood that 
          mix material are not suppose to be generated and segregate at departmental level than only

          </p>
            
          </label>
        
          </Col> 
                      
                     
              
              </Row>

              <Row>
             
                      
                      <label>Comments</label>
                      
                      
                      <Input
                        className="form-control-alternative"
                        
                        type="textarea"
                      />
                      </Row>
                      <br/>
              <Row>
                <Col>
                <center>
                <Button color="danger">
                <icon className="ni ni-fat-remove text-white">
                  Reject
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

export default Approval;
