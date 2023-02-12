import React from 'react';

import AppProvider from './providers/appProvider'

import Header from './components/Header/header'
import About from './components/About/about'
import Menu from './components/Menu/menu'
import Book from './components/Book/book'
import FindUs from './components/FindUs/findUs'
import Footer from './components/Footer/footer'


function App() {
  return (
    <AppProvider>
      <Header/>
      <About/>
      <Menu/>
      <Book/>
      <FindUs/>
      <Footer/>
    </AppProvider>
  );
}

export default App;
