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
  Col,
  Input,
  Form,
  Row,
  Button,
  UncontrolledTooltip,
  CardBody
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Scheduling = () => {
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
              <h1 class="font-weight-bold text-white"><center>Scheduling</center></h1>
              {/*<div style={{'float':'right' }}>*/}
<Button
                    className="mr-1"
                    color="white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="md"
                  >
                    Scarp
                  </Button>
                  <Button
                  className="mr-1"
                    color="white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="md"
                  >
                    Mix Scarp
  </Button>
                  {/*</div>*/}
              </CardHeader>
                
             
             <CardBody>
             <Form>
                <div className="sm-7">
                  <Row>
              
              <Col lg ="2">   
                    <label>Complaint id no</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
        </Col>

             
                   <Col lg="2">         
                    <label>Vendor</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
        </Col>
                  
        

             
                 <Col lg="2">  
                    <label>Permit No</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
        </Col>

             
<Col lg="2">  
                    
                    <label>Department</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
            
        </Col>

             
<Col lg="2">          
                    <label>Section</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
        </Col>

             
<Col lg="2">    
                    
                    <label>Material Type</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
        </Col>
        <Col lg="2">   
                    
                    <label> Weight(tons)</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
        </Col>


             
<Col lg="2">    
                    
                    <label>Requested By</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
        </Col>

             


             
<Col lg="2">   
                    
                    <label>Contact Number</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
            
        </Col>

             
<Col lg="2">           
                    <label>Cost Center</label>
                    <Input type="select" name="select" id="exampleSelect">
        
          <option>filter column...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </Input>
        </Col>

             

            
            
            </Row>
            
            </div>
           
            </Form>
             </CardBody>
                    
                      
                    
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Scheduling;

