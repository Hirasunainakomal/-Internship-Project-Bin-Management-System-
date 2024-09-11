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
    CardBody
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  
  const Misdata = () => {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0"></h3>

                  
                </CardHeader>
               <CardBody>
               <form>
               
                      <Col lg="3">
                      <FormGroup>
                      <label>Date Range</label>
                      
                      <Input
                        className="form-control-alternative"
                        placeholder="04/27/2023 - 05/27/2023"
                        rows="4"
                        defaultValue="SELECT"
                        type="number"
                      />
                    </FormGroup>
                    </Col>
                    </form>
               </CardBody>
                      
                        
                      
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Misdata;