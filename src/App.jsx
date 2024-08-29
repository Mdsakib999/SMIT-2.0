import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div>

      {/* header  */}


      <div className='min-h-[calc(100vh-196px)] '>
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
