import React, { lazy, Suspense } from 'react'
import { OPLoader } from './ComponentOP/OPLoader';
import { useSelector } from 'react-redux';

const OPEntry = lazy(() => import("./PagesOP/OPEntry").then(module => ({ default: module.OPEntry })));
const OPHotelEntry = lazy(() => import("./PagesOP/OPHotelEntry").then(module => ({ default: module.OPHotelEntry })));
const OPHotelSignup = lazy(() => import("./PagesOP/OPHotelSignup").then(module => ({ default: module.OPHotelSignup })))
const OPHotelLogin = lazy(() => import("./PagesOP/OPHotelLogin").then(module => ({ default: module.OPHotelLogin })))
const OPEmployeeEntry = lazy(() => import("./PagesOP/OPEmployeeEntry").then(module => ({ default: module.OPEmployeeEntry })))
const OPEmployeeLogin = lazy(() => import("./PagesOP/OPEmployeeLogin").then(module => ({ default: module.OPEmployeeLogin })))
const OPEmployeeSignup = lazy(() => import("./PagesOP/OPEmployeeSignup").then(module => ({ default: module.OPEmployeeSignup })))
const OPEmployeeUser = lazy(() => import("./PagesOP/OPEmployeeUser").then(module => ({ default: module.OPEmployeeUser })))
const OPEmployeeSettings = lazy(() => import("./PagesOP/OPEmployeeSettings").then(module => ({ default: module.OPEmployeeSettings })))
const OPServerOrderPlacing = lazy(() => import("./PagesOP/OPServerOrderPlacing").then(module => ({ default: module.OPServerOrderPlacing })))
const OPServerOrderProcessing = lazy(() => import("./PagesOP/OPSeverOrderProcessing").then(module => ({ default: module.OPServerOrderProcessing })))
const OPServerOrderCompleted = lazy(() => import("./PagesOP/OPSeverOrderCompleted").then(module => ({ default: module.OPServerOrderCompleted })))
const OPError404 = lazy(() => import("./PagesOP/OPError404").then(module => ({ default: module.OPError404 })))

export const OPRoutes = () => {
    const getAppRouteData = useSelector((state) => state.appstate.route_info);
    return [
        {
            path: "/",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPEntry />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/hotel",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPHotelEntry />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/hotel/hotel-login",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPHotelLogin />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/hotel/hotel-signup",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPHotelSignup />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/employee",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPEmployeeEntry />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/employee/employee-login",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPEmployeeLogin />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: "/employee/employee-signup",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPEmployeeSignup />
                </Suspense>
            ),
            isloggedin: false,
        },
        {
            path: `/${getAppRouteData.company}/${getAppRouteData.usertype}/my-profile`,
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPEmployeeUser />
                </Suspense>
            ),
            isloggedin: true,
        },
        {
            path:`/${getAppRouteData.company}/${getAppRouteData.usertype}/settings`,
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPEmployeeSettings />
                </Suspense>
            ),
            isloggedin: true,
        },
        {
            path: `/${getAppRouteData.company}/${getAppRouteData.usertype}/order-placing`,
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPServerOrderPlacing />
                </Suspense>
            ),
            isloggedin: true,
        },
        {
            path: `/${getAppRouteData.company}/${getAppRouteData.usertype}/order-processing`,
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPServerOrderProcessing />
                </Suspense>
            ),
            isloggedin: true,
        },
        {
            path: `/${getAppRouteData.company}/${getAppRouteData.usertype}/order-Completed`,
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPServerOrderCompleted />
                </Suspense>
            ),
            isloggedin: true,
        },
        {
            path: "*",
            element: (
                <Suspense fallback={<OPLoader />}>
                    <OPError404 />
                </Suspense>
            ),
            isloggedin: false,
        },
    ]
}
