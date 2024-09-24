
import Dashboard from '../../components/Dashboard/Dashboard'; 
import Sidebar from '../../components/Sidebar/Sidebar'; 
import Container from 'react-bootstrap/Container'; 

import "./Board.css";

const Board = () => {
  return (
    <div className="dashboard">
      {/* Sidebar for navigation */}
      <Sidebar /> 

      {/* Main dashboard area */}
      <Container fluid className="dashboard-main-container">
        <h2>Project Dashboard</h2>
        <p>Manage your tasks and projects easily</p>
        
        {/* Render the Board component, which includes task columns and task cards */}
        <Dashboard />  
      </Container>
    </div>
  );
};

export default Board;

