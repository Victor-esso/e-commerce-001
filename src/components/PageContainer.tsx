import React from 'react'
import NotificationBar from './NotificationBar';
import Header from './primary/Header';

type props = {
    children?: React.ReactNode
}

const PageContainer : React.FC<props> = ({ children }) => {
    return (
        <>
            <div className='vertical *:w-full fixed w-full h-max inset-0 z-[10]'>
                <NotificationBar />
                <Header/>
            </div>
            <section className='w-full'>
                {children}
            </section>
        </>
    );
}
export default PageContainer