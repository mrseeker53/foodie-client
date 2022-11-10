import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import MenuDetails from "../../Pages/Menu/MenuDetails";

// Create react router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/menu/:id',
                element: <MenuDetails></MenuDetails>,
                loader: ({ params }) => fetch(`https://foodie-server-one.vercel.app/menu/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;