import React from "react";
import Image from 'next/image';
import classes from "./layout.module.css";

function Layout({ children }) {
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <Image
                    src="/images/tufan.jpg" // Make sure this path is correct
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className={classes.profilePic}
                />
                <h1>Mustafa Tufan Keser</h1>
            </header>
            <div className={classes.mainContent}>
                {children}
            </div>
        </div>
    );
}

export default Layout;
