import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    // step-1 we will develop a method here to handle the submit 
    // step-2 And for submitting form we will also require the use state So let's make a state 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    // step-6 In this step we will do how to fetch the values
    // in usercontext and for that purpose this useContext hook helps us
    const { setUser } = useContext(UserContext)
    // this "usecontext" provides the access to the user and set user
    // we have passed the user and set user in the UserContext.jsx file

    const handleSubmit = (e) => {
        // we have prevent the default action here because 
        // if we are submitting by default, the values go here and there through url
        // or it all goes through the post method
        // ** SO FAR WE HAVE LEARNT THAT HOW TO SEND THE DATA NOW WE WILL LEARN HOW TO RECEIVE DATA
        e.preventDefault();
        setUser({ username, password });
        console.log(username, password);
    }

    return (
        <div className="">
            <h1 className="text-center">Login</h1>
            {" "}
            {/* step-3 we will govern the input value from username */}
            {/* step-4 we will also require one onChange here, basically it controls the changes in the field */}
            {/* step-5 after onChange, fire a callback method 
                if any event occurs take that event and call the "setUsername" and pass the value (e.target.value)
            */}
            <input type="text" placeholder="username" value={username} 
                onChange={(e) => setUsername(e.target.value)} />
                {"       "}
            {/* step-5 we will just copy the onChange and callback to the password input */}
            <input type="text" placeholder="password" value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
