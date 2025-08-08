import React from 'react'
import NotificationBar from './NotificationBar';
import Header from './primary/Header';

type props = {
    children?: React.ReactNode
}

const PageContainer : React.FC<props> = ({ children }) => {
    return (
        <>
            <NotificationBar />
            <section className='w-full max-w-[1920px] mx-auto'>
                <Header/>
                {children}
            </section>
        </>
    );
}
export default PageContainer