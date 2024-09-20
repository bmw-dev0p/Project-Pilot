
import Dashboard from '../../components/Dashboard'; 
import Sidebar from '../../components/Sidebar'; 
import Container from 'react-bootstrap/Container'; 

import "./Board.css";

const Board = () => {
  return (
    <div className="dashboard d-flex">
      {/* Sidebar for navigation */}
      <Sidebar /> 

      {/* Main dashboard area */}
      <Container fluid className="p-4">
        <h2>Project Dashboard</h2>
        <p>Manage your tasks and projects easily</p>
        
        {/* Render the Board component, which includes task columns and task cards */}
        <Dashboard />  
      </Container>
    </div>
  );
};

export default Board;

