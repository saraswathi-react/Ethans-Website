import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavHeader } from 'src/layout/Partials/NavHeader';
import CompanyFormation from '@modules/CompanyFormation';
import MainIndex from '@modules/HomePage';
import ClientPage from '@modules/Clientele/Partils/ClientPage';
import { PrivateLimitedcompany } from '@modules/CompanyFormation/Partials/PrivateLimitedcompany';
import Enquiry from '@modules/Enquiry';
import BussinessService from '@modules/Bussiness/BussinessService/BussinessService';
import IncomeTax from '@modules/Bussiness/Taxation/IncomeTax';
import Trust from '@modules/CompanyFormation/Partials/Trust';
import Propreitorship from '@modules/CompanyFormation/Partials/Partnership';
import Partnership from '@modules/CompanyFormation/Partials/Propreitorship';
import { PublicLimitedCompany } from '@modules/CompanyFormation/Partials/PublicLimitedCompany';



const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<NavHeader />}>
                    <Route path="/" element={<MainIndex />} />
                    <Route path="/OnePersonCompany" element={<CompanyFormation />} />
                    <Route path="/PrivateLimitedcompany" element={<PrivateLimitedcompany />} />

                    <Route path="/publiclimitedcompany" element={<PublicLimitedCompany />} />

                    <Route path="/clientele" element={<ClientPage />} />
                    <Route path="/enquiry" element={<Enquiry />} />
                    <Route path="/bussiness" element={<BussinessService />} />
                    <Route path="/incomeTax" element={<IncomeTax />} />
                    <Route path="/trust" element={<Trust />} />
                    <Route path="/propreitorship" element={<Propreitorship />} />
                    <Route path="/partnership" element={<Partnership />} />


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
