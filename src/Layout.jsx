import React, { useState,useEffect } from "react"; 
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Alert from "./Components/Alert";
import CTA from "./Components/CTA";
function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
function Layout() {
  const toggleMode = () => {};
  const [alert, setAlert] = useState(null);
  const showAlert = (type,message ) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
        setAlert(null)
    }, 3000);
  };
  return (
    <>
      <Alert alert={alert} />
      <Header toggleMode={toggleMode}  />
      <ScrollToTop />

      <Outlet />
      <CTA alert={showAlert}/>
      <Footer />
    </>
  );
}

export default Layout;
