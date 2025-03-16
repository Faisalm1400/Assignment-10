import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddNewCampaign from '../pages/AddNewCampaign';
import CampaignDetails from '../pages/CampaignDetails';
import AllCampaign from '../pages/AllCampaign';
import MyCampaign from '../pages/MyCampaign';
import UpdateCampaign from '../pages/UpdateCampaign';
import MyDonations from '../pages/MyDonations';
import ErrorPage from '../pages/ErrorPage';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/campaign')
            },
            {
                path: "/allCampaign",
                element: <AllCampaign />,
                loader: () => fetch('http://localhost:5000/campaign')
            },
            {
                path: "/addNewCampaign",
                element: <AddNewCampaign />
            },
            {
                path: "/myCampaigns",
                element: <MyCampaign />
            },
            {
                path: "/campaign/:campaignID",
                element: <CampaignDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.campaignID}`)
            },
            {
                path: "/updateCampaign/:id",
                element: <UpdateCampaign />,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
            },
            {
                path: "/myDonations",
                element: <MyDonations />,

            }
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    }

]);

export default Routes;