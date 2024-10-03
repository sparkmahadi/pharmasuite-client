"use client"

import React, { useState } from 'react';
import AdminSideNav from './AdminSideNav';
import SellerSideNav from './SellerSideNav';
import BuyerSideNav from './BuyerSideNav';

interface UserRole {
  userRole: string,
}

const DashSideNav: React.FC<UserRole> = ({userRole}) => {

  if(userRole === 'admin'){
    return <AdminSideNav/>
  }
  if(userRole === 'seller'){
    return <SellerSideNav/>
  }
  if(userRole === 'buyer'){
    return <BuyerSideNav/>
  }

  return (
    <div><h3>No user role is found</h3></div>
  );
};

export default DashSideNav;
