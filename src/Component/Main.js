import React from 'react'
import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';



export default function Main() {
  return (
    <div>
        <Header/>
        <Menu/>
        <Dashboard/>
        <Footer/>
    </div>
  )
}
