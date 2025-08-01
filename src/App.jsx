import React from 'react'
import NavBar from './components/navbar/NavBar'
import Container from './components/Container'
import HeroSection from './components/hero/HeroSection'
import AboutMe from './components/about/AboutMe'
import Experience from './components/experience /Experience'
import Skills from './components/skills/Skills'
import ContactForm from './components/form/ContactForm'
import { Projects } from './components/project'
import ScrollLinkedProjects from './components/project/scrollproject'
import Footer from './components/footer/Footer'
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
 <NavBar/>
    <Container>

   <HeroSection/>
   <AboutMe/>
   <Experience/>
   <Skills/>
  <ScrollLinkedProjects/>
   <ContactForm/>
 </Container>
 <Footer/>
 <Toaster position="top-right" reverseOrder={false} />
    
    </>
  )
}

export default App