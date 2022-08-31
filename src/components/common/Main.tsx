import React, { FC } from 'react';
import SideBar from './SideBar';

interface MainProp {
    childComp: React.ReactNode;
}

const Main = ({ childComp }: MainProp) => {
    return (
        <div className="min-h-screen flex overflow-hidden pt-16">
            {/* <SideBar /> */}
            <div className="opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            {/* lg:ml-64 */}
            <div id="main-content" className="w-full flex flex-col bg-slate-850 relative overflow-y-auto">
                <div className="mb-auto text-gray-200">
                    <main>
                        <div className="flex flex-col pt-6 px-6">{childComp}</div>
                    </main>
                </div>

            </div>
        </div>
    );
};

export default Main;
