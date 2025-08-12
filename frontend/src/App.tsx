import { useEffect, useState } from 'react';
import  Alert  from './componenet/ui/Alert';
import Footer from './componenet/ui/footer';

function App() {
  const [message, setMessage] = useState<string>('Loading...');
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'info' as const, message: 'Write your info Label', description: 'Label' },
    { id: 2, type: 'success' as const, message: 'Write your success message Label', description: 'Label' },
    { id: 3, type: 'warning' as const, message: 'Write your warning Label', description: 'Label' },
    { id: 4, type: 'error' as const, message: 'Write your error Label', description: 'Label' }
  ]);
  
    const removeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

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

    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Alert Component Demo</h1>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              type={alert.type}
              message={alert.message}
              description={alert.description}
              dismissible={true}
              onClose={() => removeAlert(alert.id)}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
  </>
);
}

export default App;
