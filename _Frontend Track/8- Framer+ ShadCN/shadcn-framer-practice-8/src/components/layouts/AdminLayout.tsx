import React from 'react';
import { Outlet } from 'react-router';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
    return (
        <div className=' grid grid-cols-12 '>
            <AdminSidebar/>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;