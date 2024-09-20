import { Form, Dropdown, InputGroup } from 'react-bootstrap';

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <Dropdown>
        <Dropdown.Toggle variant="secondary">Barone LLC</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Other Board 1</Dropdown.Item>
          <Dropdown.Item href="#">Other Board 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <InputGroup className="search-bar">
        <Form.Control placeholder="Search..." />
      </InputGroup>

      <div className="avatars">
        {/* Add user avatar icons here */}
      </div>
    </header>
  );
}

export default Header;
