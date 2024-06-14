import React,{useState , useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    // step-1 we will develope a method here to handle the submit 
    // step-2 And for submittting form we will also require the use state So let's make a state 
    const[username,setUsername] =useState('')
    const[password,setPassword] =useState('')
//  step-6 In this step we will do how to fetch the values
// in usercontext and for that purpose this useContext hook helps us
     const {setUser} = useContext(UserContext)
// this "usecontext" provides the access to the user and set user
// we have passed the user and set user in the UserContext.jsx file


    



    const handleSubmit = () => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        console.log(username, password);
    }
    return (
        <div>
            <h1>Login</h1>
            {/*step-3 we will govern the input value from username  */}
            {/* step-4 we wil also require one OnChange here basically it controls the changes in the field  */}
            {/* Step-5 after onchangefire a callback method 
              if any event occurs take that event and call the "SetUsername" and pass the value (e.target.value)
            */}
            {
                // step-5 we wll just copy and on change and callback to the password input
            }
            <input type="text" placeholder="username"  value={username} 
            onChange={
                (e) => setUsername(e.target.value)
            } />
            <input type="text" placeholder="password" value={password} 
            onChange={
                (e) => setPassword(e.target.value)  }/>
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
}
export default Login;