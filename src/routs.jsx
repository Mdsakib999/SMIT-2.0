import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Home/Home';
import Contact from './Components/Contact';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            
            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    }
])