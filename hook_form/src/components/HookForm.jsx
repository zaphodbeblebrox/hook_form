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
                {firstName.length < 2 && firstName !== "" ? <p>First Name must be at least 2 characters</p>:null}
                <p>Last Name: {lastName}</p>
                {lastName.length < 2 && lastName !== "" ? <p>Last Name must be at least 2 characters</p>:null}
                <p>Email: {email}</p>
                {email.length < 5 && email !== "" ? <p>Email must be at least 5 characters</p>:null}
                <p>Password: {password}</p>
                {password.length < 8 && password !== "" ? <p>Password must be at least 8 characters</p>:null}
                {password !== confirmPassword && password !== "" ? <p>Passwords must match</p>:null}
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}
export default HookForm;