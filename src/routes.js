import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Scheduling from "views/examples/Scheduling.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Approval from "views/examples/Approval.js";
import Bin from "views/examples/Bin.js";
import Verification from "views/examples/Verification.js";
import Validation from "views/examples/Validation.js";
import Certificate from "views/examples/Certificate.js";
import Execution from "views/examples/Execution.js";
import Cusfeedback from "views/examples/Custfeedback.js";
import Compfeedback from "views/examples/Compfeedback.js";






var routes = [
  {
    path: "/index",
    name: "MIS Report",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/bin",
    name: "Raised Request",
    icon: "ni ni-basket text-blue",
    component: Bin,
    layout: "/admin"
  },
  
  {
    path: "/Scheduling",
    name: " Make Schedule",
    icon: "ni ni-collection text-orange",
    component: Scheduling,
    layout: "/admin"
  },
  {
    path: "/Approval",
    name: "Mix Approval",
    icon: "ni ni-check-bold text-green",
    component: Approval,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "My profile",
    icon: "ni ni-circle-08 text-black",
    component: Profile,
    layout: "/admin"
  },
  
  
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-black",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/Execution",
    name: "Job Execution",
    icon: "ni ni-delivery-fast text-black",
    component: Execution,
    layout: "/admin"
  },
  {
    path: "/Validation",
    name: "Validation",
    icon: "ni ni-settings text-black",
    component: Validation,
    layout: "/admin"
  },
  {
    path: "/Verification",
    name: "Verification",
    icon: "ni ni-cart text-orange",
    component: Verification,
    layout: "/admin"
  },
  {
    path: "/Cusfeedback",
    name: "Customer Feedback",
    icon: "ni ni-circle-08 text-green",
    component: Cusfeedback,
    layout: "/admin"
  },
  {
    path: "/Certificate",
    name: "Job Certificate",
    icon: "ni ni-hat-3 text-black",
    component:Certificate,
    layout: "/admin"
  },
  {
    path: "/Compfeedback",
    name: "Completion Feedback",
    icon: "ni ni-archive-2 text-green",
    component: Compfeedback,
    layout: "/admin"
  }

];
export default routes;
