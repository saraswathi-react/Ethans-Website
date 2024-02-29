import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavHeader } from 'src/layout/Partials/NavHeader';
import CompanyFormation from '@modules/CompanyFormation';
import MainIndex from '@modules/HomePage';


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<NavHeader />}>
                    <Route path="/" element={<MainIndex />} />
                    <Route path="/about" element={<CompanyFormation />} />
                    {/*  <Route path="/collection" element={<CustomizedGiftsCarousel/>}  />
        <Route path="/enquiry" element={<Profile/>}  />
        <Route path="/cart" element={<ProductViewPage />} /> */}
                </Route>
            </Routes>
            <Outlet />
        </>

    );
};

export default AppRouter;
