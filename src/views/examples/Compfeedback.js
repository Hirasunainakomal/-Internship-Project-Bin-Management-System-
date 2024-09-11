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
    Button,
    Row,
    UncontrolledTooltip,
    CardBody,
    label,
    Form
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  
  const Compfeedback = () => {
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
                <h1 class="font-weight-bold text-white"><center>feedback</center></h1>
                </CardHeader>
               <CardBody>
                <Form>
                  <div className="pl-lg-10">
                    <Row>
                
                <Col lg="2">   
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
                      
                      <label>Contact No</label>
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
                      <label>Priority</label>
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
  
  export default Compfeedback;