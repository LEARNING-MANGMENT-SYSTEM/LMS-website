
import { RouterProvider } from "react-router-dom";
import routes from "./components/Navigation/Routes";

import SignUp from "./pages/SignUP/SignUp";
import SignIn from "./pages/SignIn/SignIn";
// import Headersignin from "./components/HeaderSingIn_up";
function App() {
  
  return (
    <>
      <RouterProvider router={routes} />
  {/* <SignIn/> */}
      {/* <SignUp/> */}
    </>
  );
}

export default App;
