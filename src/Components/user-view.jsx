import Accordion from "react-bootstrap/Accordion";

function UserView({user}) {
  return (
    <div className="container mt-4">
      <Accordion defaultActiveKey="0">
      <Accordion.Item>
              <Accordion.Header>{user.name}</Accordion.Header>
              <Accordion.Body>
                Email: {user.email} <br />
                Address: {user.address}
              </Accordion.Body>
            </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default UserView;
