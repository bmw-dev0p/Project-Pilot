
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import your CSS here

import Navbar from './components/Navbar'; // Adjust the path to components folder
import Board from './pages/Board/Board';
// import Sidebar from './components/Sidebar'; // Sidebar component
// import Board from './components/Board'; // Board component for tasks

function App() {
  return (
    <div className="app">
      <div className="content-container">
        <Navbar />
        <Board />
      {/* Sidebar component */}
      {/* <Sidebar /> */}

      {/* Main content area */}
        {/* Navbar */}

        {/* Main section where routed components or the board will be rendered */}
        <main className="container pt-5">
          <Outlet /> {/* This allows React Router to load other pages */}
          {/* Rendering the task board */}
        </main>
      </div>
    </div>
  );
}

export default App;

