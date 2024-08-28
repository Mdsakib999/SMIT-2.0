import "./App.css";
import { Outlet } from "react-router-dom";
import Demo from "./Components/Demo";

function App() {

  return (
    <div>

      {/* header  */}

      <Demo />
      <div className='min-h-[calc(100vh-196px)] '>
        <Outlet></Outlet>
      </div>

      {/* Footer */}
    </div>
  );
}

export default App;
