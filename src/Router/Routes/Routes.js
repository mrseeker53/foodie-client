import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import MenuDetails from "../../Pages/Menu/MenuDetails";
import MyReview from "../../Pages/MyReview/MyReview";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddMenu from "../../Pages/AddMenu/AddMenu";
import Support from "../../Pages/Home/Support/Support";


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
                path: '/support',
                element: <Support></Support>
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
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addmenu',
                element: <PrivateRoute><AddMenu></AddMenu></PrivateRoute>
            }
        ]
    },
    // Route for 404 page
    {
        path: '*',
        element:
            <div className='text-error text-center mt-44'>
                <h1 className='text-5xl'>404... Not Found!</h1>
                <p className='text-xl'>: : The server can not find the requested resource</p>
            </div>
    }
]);

export default router;