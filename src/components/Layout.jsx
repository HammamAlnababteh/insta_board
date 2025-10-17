import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";


const Layout = () => {
    return (
        <>
            <Navigation />
            <main className="container">
                <Outlet />
            </main>
            <footer className="footer">
                © 2025 InstaBoard | Made by Hammam
            </footer>


        </>
    );
};

export default Layout;
