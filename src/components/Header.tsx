import React from "react";
import style from "../styles/modules/Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header className={style.wrapper}>
            <span className={style.title}>GIF Maker 📹</span>
        </header>
    );
};

export default Header;
