// import { useState } from 'react'
import FirstSection from './components/FirstSection.jsx'
import AboutMe from './components/AboutMe.jsx'
import Links from './components/Links.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'



function App() {
  // const [projetos, setProjetos] = useState('')

  return (
    <>
      <FirstSection/>
      <Links/>
      <AboutMe/>
      {/* 
      <Skills/>
      <Projects/>
      <Footer/> */}
    </>
  )
}

export default App
