import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer>
            <span>{`GIF Maker © ${new Date().getFullYear()}`}</span>
        </footer>
    );
};

export default Footer;
