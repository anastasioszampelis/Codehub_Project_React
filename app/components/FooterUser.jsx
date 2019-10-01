import React from "react";
import LoadingHOC from './LoadingHOC';

const FooterUser = ({ user }) => (
    <div>
        logged in as {user.name} {user.admin && "(admin)"}
    </div>
)
  

export default LoadingHOC(FooterUser);

