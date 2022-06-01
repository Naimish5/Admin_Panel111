import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
import Menu from '../Menu';

export default function View_product() {
    return (
        <>
            <div className='wrapper'>
                <Header />
                <Menu />
            </div>
            <div className='content-wrapper' align='center'>
                <div className='container'>
                    <h1>View_product</h1>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
