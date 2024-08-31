import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Contact from './Components/Contact';
import Home from './Pages/Home/Home';


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