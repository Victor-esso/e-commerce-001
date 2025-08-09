import React, { useEffect } from 'react'
import NotificationBar from './NotificationBar';
import Header from './primary/Header';
import Footer from './primary/Footer';

type props = {
    children?: React.ReactNode
}

const PageContainer : React.FC<props> = ({ children }) => {

    useEffect(() => {
        const headerWrapper = document.querySelector('.header-wrapper');

        const handleScroll = () => {
        if (!headerWrapper) return;
        if (window.scrollY > 0) {
            headerWrapper.classList.add('scrolled');
        } else {
            headerWrapper.classList.remove('scrolled');
        }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='vertical *:w-full fixed w-full h-max inset-0 z-[10] header-wrapper'>
                <NotificationBar />
                <Header/>
            </div>
            <section className='w-full'>
                {children}
            </section>
            <Footer/>
        </>
    );
}
export default PageContainer