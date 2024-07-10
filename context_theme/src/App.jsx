import { useEffect, useState } from 'react'

import { ThemeProvider } from './Contexts/Theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  //  In this theme mode ,here default theme is light mode 
  const [themeMode,setThememode]= useState("light")

  const lightTheme = () =>{ 
    setThememode("light")
  }
  const darkTheme = () =>{ 
    setThememode("dark")
  }

//  Actual change in the  theme using javascript
useEffect(() =>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
    //  to get the theme button here we will need to wrap it with a provider
    //  we will need to give the acces of the values 
    
    <ThemeProvider value={{themeMode, lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">   
                      <ThemeBtn/>                    
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
          
    </ThemeProvider>
  )
  
}

export default App
