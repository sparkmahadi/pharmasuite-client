import React from 'react';

const DashLayout = () => {
    return (
        <div>

           <DashSideNav/>

            <div className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
                <DashNavbar/>

                <div className="p-6">
                <DashCards/>
                <DashUserDiv/>
                <OrderActivities/>    
                    
                </div>
            </div>
        </div>
    );
};

export default DashLayout;