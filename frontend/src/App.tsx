import Input from "./components/UI/Input";
import { RouterProvider } from "react-router-dom";
import routes from "./components/Navigation/Routes";




function App() {

  return (
    <>
    <RouterProvider router={routes} />
    
    </>
    
  );
}


  
  export default App