import React, { useState } from "react";
import ListView from "./list-view";
import UserView from "./user-view";

function Users({user}) {
  return (
    
    <>
      {/* <ListView users={users} /> */}
      
      <UserView user={user} />
    </>
  );
}

export default Users;
