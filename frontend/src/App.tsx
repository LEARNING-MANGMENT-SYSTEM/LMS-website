import Input from "./components/UI/Input";

import { RouterProvider } from "react-router-dom";
import routes from "./components/Navigation/Routes";
import Layout from './Layout';



function App() {

  return (
    <>
    <RouterProvider router={routes} />
    <Layout/>
    </>
    
  );
}


  
  export default App