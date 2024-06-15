import React from 'react';
//  step-1 React create context is basically the method so first we store it in a variable 

const UserContext =React.createContext()

export default UserContext;
// ste-2 we will wrap the components we want to in the UserContext
// It is basically a provider which provides the data to the components in which we want it to use 
