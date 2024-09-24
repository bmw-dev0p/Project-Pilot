// src/App.tsx
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import your CSS here

import Navbar from './components/Navbar'; // Adjust the path to components folder
// import Board from './pages/Board/Board'; // Remove this line

function App() {
  return (
    <div className="app">
      <div className="content-container">
        <Navbar />

        {/* Main content area */}
        <main className="app-container">
          <Outlet /> {/* This allows React Router to load other pages */}
        </main>
      </div>
    </div>
  );
}

export default App;
