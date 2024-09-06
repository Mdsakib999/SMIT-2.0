import "./App.css";
import { Outlet } from "react-router-dom";
// import Demo from "./Components/Demo";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Footer/Footer";
// import CustomCursor from "./Components/CustomCursor";

function App() {

  return (
    <div>
      {/* <CustomCursor /> */}
      {/* header  */}
      <Navbar />
      {/* <Demo /> */}
      <div className='min-h-[calc(100vh-196px)] pt-32 '>
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
