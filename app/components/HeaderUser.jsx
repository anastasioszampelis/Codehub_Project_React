import React from "react";
import { Media } from "reactstrap";
import LoadingHOC from './LoadingHOC';

function HeaderUser( {user} ) {
    return (
        user && <Media>
            <Media left>
                <img
                    className="rounded-circle"
                    width="50"
                    height="50"
                    src={user.imgPath}
                    alt={user.name}
                />
            </Media>
            <Media body className="user-text">
            {user.username}
            </Media>
        </Media>
  );
}

export default LoadingHOC(HeaderUser);