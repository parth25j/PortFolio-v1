import React from 'react'
import NavBar from './components/navbar/NavBar'
import Container from './components/Container'
import HeroSection from './components/hero/HeroSection'
import AboutMe from './components/about/AboutMe'
import Experience from './components/experience /Experience'
import Skills from './components/skills/Skills'
import ContactForm from './components/form/ContactForm'

const App = () => {
  return (
    <>
 <NavBar/>
    <Container>

   <HeroSection/>
   <AboutMe/>
   <Experience/>
   <Skills/>
   <ContactForm/>
 </Container>

    
    </>
  )
}

export default App