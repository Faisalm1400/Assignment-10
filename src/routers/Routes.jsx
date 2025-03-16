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
import PrivateRoute from './PrivateRoute';

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
                element: <PrivateRoute>
                    <AddNewCampaign />
                </PrivateRoute>
            },
            {
                path: "/myCampaigns",
                element: <PrivateRoute>
                    <MyCampaign />
                </PrivateRoute>
            },
            {
                path: "/campaign/:campaignID",
                element: <PrivateRoute>
                    <CampaignDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.campaignID}`)
            },
            {
                path: "/updateCampaign/:id",
                element: <PrivateRoute>
                    <UpdateCampaign />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
            },
            {
                path: "/myDonations",
                element: <PrivateRoute>
                    <MyDonations />
                </PrivateRoute>

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