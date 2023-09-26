import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const Router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>,
                loader: () => fetch('/donations.json')

            },
            {
                path:'/donations',
                element:<Donation></Donation>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donation/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donations.json')
                
            }
        ]
        
    }
])

export default Router;