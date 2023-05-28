import Accordion from "react-bootstrap/Accordion";

function ListView(props) {
  return (
    <div className="container mt-4">
      <Accordion defaultActiveKey="0">
        {
          props.users.map((user, i) => {
            return (
              <Accordion.Item key={i} eventKey={i}>
              <Accordion.Header>{user.name}</Accordion.Header>
              <Accordion.Body>
                Email: {user.email} <br />
                Address: {user.address}
              </Accordion.Body>
            </Accordion.Item>
            )
          })
        }
      </Accordion>
    </div>
  );
}

export default ListView;
