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
                <section className='w-full max-w-[1920px] mx-auto '>
                    <Header/>
                </section>
            </div>
            <section className='w-full max-w-[1920px] mx-auto'>
                {children}
            </section>
        </>
    );
}
export default PageContainer