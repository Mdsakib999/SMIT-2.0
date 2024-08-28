import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div>

      {/* header  */}


      <div className='min-h-[calc(100vh-196px)] '>
        <Outlet></Outlet>
      </div>

      {/* Footer */}
    </div>
  );
}

export default App;
