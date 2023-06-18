import React, {useState} from "react";

const HookForm = ({setUser}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        setUser(newUser);
    }

    return(
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={event => setFirstName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName"  value={lastName} onChange={event => setLastName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"  value={email} onChange={event => setEmail(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword"  value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}
export default HookForm;