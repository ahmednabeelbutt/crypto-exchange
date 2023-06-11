import React, { useState } from "react";
import ListView from "./list-view";
import UserView from "./user-view";
import Banner from './banner';

function Users({user}) {
  return (
    
    <>
      {/* <ListView users={users} /> */}
      <Banner />
      <UserView user={user} />
    </>
  );
}

export default Users;
