import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import style from "../styles/modules/Layout.module.scss";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={style.container}>
            <Header />
            <main className={style.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
