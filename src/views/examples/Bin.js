import { useState, useEffect } from "react";
import axios from "axios";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Button,
  Form,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  NavLink,
  FormSelect,
  FormGroup,
  handleSubmit,
  Input,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavItem,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import Bincleandata from "views/examples/Bincleandata.js";

const Bin = () => {
  const [copiedText, setCopiedText] = useState();
  useEffect(() => {
    // fetch(
    //   "http://localhost:3001/user")
    //               .then((res) => res.json())
    //               .then((json) => {
    //                  console.log(json);
    //               })

    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        console.log(res);
        
      })
      .catch((msg) => console.log(msg));

  },[]);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader style={{ background: "purple" }}>
                <div style={{ float: "left" }}>
                  <h1 className="font-weight-bold text-white">Indicate Bin Status</h1>
                </div>
              </CardHeader>

              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-plant"
                          ></label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>---Select Plant---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-bin-location"
                          ></label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>---Select Bin Location---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-Material-type"
                          ></label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>---Select  Material Type---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-status"
                          ></label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>---Select Status---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="pl-lg-4">
                        <Button color="primary">
                          <Input type="file" name="file" id="exampleFile" />
                        </Button>
                      </div>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}

                  <div className="pl-lg-4">
                    <Col lg="6">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          placeholder="PLEASE PUT YOUR REMARK HERE..........."
                          rows="4"
                          defaultValue="PLEASE PUT YOUR REMARK HERE............"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <br />
                  <Row>
                    <Col>
                      <center>
                        <Button color="success">
                          <icon className="ni ni-send text-white">Send</icon>
                        </Button>
                      </center>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
            /
          </div>
        </Row>
      </Container>
    </>
  );
};
<Bincleandata />;

export default Bin;
