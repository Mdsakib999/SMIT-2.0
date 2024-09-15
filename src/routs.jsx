import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Contact from './Components/Contact';
import Home from './Pages/Home/Home';
import BlogDetails from './Pages/Blog/BlogDetails';
import Service from './Pages/Service/Service';
import ServiceDetails from './Pages/Service/ServiceDetails';
import About from './Pages/About/About';
import Career from './Pages/Career/Career';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>
            },

            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: '/blog/:id',
                element: <BlogDetails />
            },
            {
                path: '/services',
                element: <Service />
            },
            {
                path: '/service/:title',
                element: <ServiceDetails />
            },
            {
                path: '/career',
                element: <Career />
            }
        ]
    }
])