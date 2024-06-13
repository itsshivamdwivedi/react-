import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

// ye outlet ky karta hai layout ko as a base rakhta hai and andar jo bhi chiz aayegi usko as it is rakhta hai 
// for example we want that our header and footer should remain same in the page so we dont want to apply it in our all the pages that's why we usr these outlet 

function Layout() {
   return(
 <>
<Header/>
<Outlet/>
<Footer/>

 </>
   )
}
export default Layout