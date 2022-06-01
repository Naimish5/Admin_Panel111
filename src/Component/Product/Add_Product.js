import React from 'react'
import Dashboard from '../Dashboard'
import Footer from '../Footer'
import Header from '../Header'
import Menu from '../Menu'

export default function Add_Product() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <Menu />
        <div className='content-wrapper' align='center'>
          <div className='container'>
            <h1>Add_Product</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

