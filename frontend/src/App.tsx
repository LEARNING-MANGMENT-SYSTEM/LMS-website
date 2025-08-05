import { useEffect, useState } from 'react';

import { RouterProvider } from "react-router-dom";
import routes from "./components/Navigation/Routes";
import Layout from "./components/Navigation/Layout";

function App() {


  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    // Replace with your actual backend URL if it's not localhost:5000
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMessage('Failed to fetch message from server');
      });
  }, []);

  return (
  
    <>
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
    <h1>React + TypeScript Learning Platform</h1>
    <p>Message from server:</p>
    <pre>{message}</pre>
    </div>
    <RouterProvider router={routes} />
    <Layout/>
    

    
    </>

  )}
  export default App