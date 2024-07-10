import { createContext,useContext } from "react";

// here we are creating a themecontext  and in that we are creating methods
export const ThemeContext = createContext({
    themeMode: "light",  // default theme
    darkTheme: () => {},
    lightTheme: () => {},
    // the above two lines are basically a method 
    //  WHen a user calls the context he will get the default theme and this two methods also


})
//  so  below line is basically a provider of above function
//  so themeprovider is the provider of themecontext
//  we will use it for wrapping the elements 

export const ThemeProvider = ThemeContext.Provider
// usually everyone make their custom hooks here and we can also export that 
export default function useTheme(){
    return useContext(ThemeContext)
}