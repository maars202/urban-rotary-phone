import React, { FC, } from 'react';
import Context from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ManageNFTs from './components/manageNFTs';
import ManageNFTs2 from './components/manageNFTs2';
import NavBar from './components/common/NavBar';
// import Main from './components/common/Main';
import Main from './components/common/Main';
import GettingStarted from './components/common/Main';
import AppHeader from './client/common/AppHeader';
import WalletPage from "./components/walletPage"
import Mainpage from './pages/Mainpage';
import Mintnftpage from './pages/Mintnftpage';
import Mintnftpage2 from './pages/Mintnftpage2';
import Elections from './pages/Elections';
import Todo from './pages/Todo';

export const App: FC = () => {

    return (
        <Context>
            <BrowserRouter>
                <NavBar />
                {/* <AppHeader/> */}
                <Main
                    childComp={
                        <Routes>
                            <Route path="/" element={<Elections />} />
                            <Route path="/mint" element={<Mintnftpage />} />
                            <Route path="/mint2" element={<Mintnftpage2 />} />
                            <Route path="/todos" element={<Todo />} />
                            <Route path="/elections" element={<Elections />} />
                        </Routes>
                    }
                />
            </BrowserRouter>
        </Context>
    );
};
