// reactstrap components
import { useEffect, useState,useContext } from "react";
import axios from "axios";



 import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label
} from "reactstrap";
import { data } from "jquery";

 
const Login = () => {
  
  
  const [user, setUser] = useState([]);
  const [Username,setusername] = useState([]);
  const [password, setpassword] = useState([]);
  const [success, setsuccess] = useState(false);
  
  const checkUser = (e) => {
    console.log(Username,password);

    
  }
   useEffect(() => {
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);

      })
      .catch((msg) => console.log(msg));
  }, [])

 
 
 return (
      
  
  
    <>
      
        
      
    
    
      <Col lg="5" md="10">
        <Card className="bg-secondary shadow border-0">
          <CardHeader style={{ background  :"white",
        color:"black"  }}>
            
            <div className="text-muted text-center mt-2 mb-3">
            <img
               style={{height:'150px',
               width: '250px'}}
              alt="..."
              src={require("../../assets/img/brand/reactlogo.png")}
            />
            </div>
            <div><h2><center> Log in</center></h2></div>
            <Form >
              
                  <FormGroup className="mb-3">
                  <label htmlFor="username">Username</label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <Input
                    
                      type="text"
                      id="Username"
                      value={Username}
                      autoComplete="off"
                      required
                      onChange={e=>setusername(e.target.value)}>
                    </Input>
                  </InputGroup>
                  </FormGroup>
                  <FormGroup>
                  <label htmlFor="password">Password</label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <Input
                      
                      type="password"
                      id="password"
                      value={password}
                      required
                    
                      onChange={e=>setpassword(e.target.value)}>
                    </Input>
                  </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                  <Input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                  </label>
                  </div>
                <div className="text-center">
                <Button
              className="text-white"
              color="primary"
              onClick={(e) =>checkUser(e.target.value)}
                >
              <small>Log in </small>
              
              
              
              </Button>
              </div>
                
              </Form>
      
           
            
            
          </CardHeader>
        </Card>
       
        
      </Col>
        
    </>
  
      
  );
  
};

export default Login;
