import React, { useState } from "react";
import ListView from "./list-view";

function Users({users}) {
//   const defaultUsers = [
//     {
//       name: "Ahmad",
//       email: "ahmad@gmail.com",
//       password: "ahmad",
//       address:
//         "101-B Punjab Society",
//     },
//     {
//       name: "Ali",
//       email: "ali@gmail.com",
//       password: "ali",
//       address:
//         "111-B Punjab Society",
//     },
//     {
//       name: "Waqas",
//       email: "waqas@gmail.com",
//       password: "waqas",
//       address:
//         "121-B Punjab Society",
//     },
    
//   ];
//   const [users, setUsers] = useState(defaultUsers);

//   const handleAddUser = (user) => {
//     setUsers([...users, user]);
//   };

  return (
    <>
      <ListView users={users} />
    </>
  );
}

export default Users;
