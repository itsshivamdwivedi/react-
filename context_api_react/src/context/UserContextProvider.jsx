import React from "react"
import UserContext from "./UserContext"

// we are passing "user" to get the values from it
// we are passing setUser so that if any changes occur it will handle it 

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)
  return (
    // we have to define to the provider which value we have provided to it, so we will pass a prop "value"
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
