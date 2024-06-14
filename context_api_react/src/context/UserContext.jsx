import React from "react";
import UserContext from "./UserContext";

//  we are passing "user" to get the values from it
//  we are passing setuser so that if any changes occur it will handle it 

const UserContextProvider = ({children}) => {
    const [user,SetUser] =React.useState(null)
    return(
        // we have to define to the provider that which value we have provided to it so we will pass a prop "Value"

        <UserContext.Provider value={{user , SetUser}}>
         {children}
        </UserContext.Provider>


    )


}
export default UserContextProvider