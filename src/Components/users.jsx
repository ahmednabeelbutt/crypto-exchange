import React, { useState } from "react";
import ListView from "./list-view";

function Users({users}) {

  return (
    <>
      <ListView users={users} />
    </>
  );
}

export default Users;
