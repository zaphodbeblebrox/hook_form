import React, {useState} from "react";

const UserDisplay = ({user}) => {

    return(
        <div>
            <div>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.confirmPassword}</p>
            </div>
        </div>
    )
}
export default UserDisplay;