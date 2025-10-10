import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Collection from './components/Collection'
import Introduction from './components/Introduction'
import FeaturesSection from './components/Features'
import DownloadSection from './components/Download'
import Footer2 from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Introduction />
      <Collection />
      <FeaturesSection />
      <DownloadSection />
      <Footer2 />
    </>
  )
}

export default App
