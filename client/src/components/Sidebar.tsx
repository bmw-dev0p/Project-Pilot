import Nav  from 'react-bootstrap/Nav';
import { FaTrello, FaChartBar, FaEnvelope, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <Nav className="flex-column sidebar">
      <Nav.Link href="/boards"><FaTrello /> Boards</Nav.Link>
      <Nav.Link href="/stats"><FaChartBar /> Stats</Nav.Link>
      <Nav.Link href="/messages"><FaEnvelope /> Messages</Nav.Link>
      <Nav.Link href="/settings"><FaCog /> Settings</Nav.Link>
    </Nav>
  );
}

export default Sidebar;
