import React from 'react'
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={`${styles.footer}  mt-5 p-3`}>
            2020 &copy; Abubaker Fashion Store.

            GitHub: <a href="https://github.com/Abubakershekhani">https://github.com/Abubakershekhani</a>
        </footer>
     );
}

export default Footer;