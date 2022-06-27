import React from 'react';
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Loader from '../layout/loader';
import LayoutRoutes from './LayoutRoutes';

const Routers = () => {

        const abortController = new AbortController();
        const layout = "indiaNld"

        useEffect(() => {
                console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
                console.disableYellowBox = true;
                return function cleanup() {
                        abortController.abort();
                }

        }, [abortController]);

        return (

                <BrowserRouter basename={'/'}>
                        <>
                                <Suspense fallback={<Loader />}>
                                        <Routes>
                                                <Route exact
                                                        path={`${process.env.PUBLIC_URL}`}
                                                        element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default/${layout}`} />}
                                                />
                                                <Route path={`/*`} element={<LayoutRoutes />} />
                                        </Routes>
                                </Suspense>
                        </>
                </BrowserRouter>
        );
};

export default Routers;