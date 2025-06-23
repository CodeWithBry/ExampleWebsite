import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './Home/Home'

import Navbar from './Navbar/Navbar'
import Lessons from './Lessons/Lessons'
import Petas from './Petas/Petas'
import About from './About/About'

export const context = createContext()

function App() {

  const [pages, setPages] = useState([
    { name: 'Home', ind: true },
    { name: 'Lessons', ind: false },
    { name: 'PETAs', ind: false },
    { name: 'About', ind: false }
  ])
  const [homePage, setHomePage] = useState(false)
  const [petasPage, setPetasPage] = useState(false)
  const [lessonsPage, setLessonsPage] = useState(false) 
  const [aboutPage, setAboutPage] = useState(false)
  const [tabs, setTabs] = useState([])

  const variables = {
    // numeric variables

    // boolean variables

    // Array variables
    pages, setPages,
    tabs, setTabs,

    // class variables
    homePage, setHomePage,
    petasPage, setPetasPage,
    lessonsPage, setLessonsPage,
    aboutPage, setAboutPage,
    // functions
  }

  useEffect(()=>{
    setTabs([homePage, lessonsPage, petasPage, aboutPage])
  },[homePage])

  useEffect(() => {
    console.log(tabs)
  }, [tabs])

  return (
    <>
      <context.Provider value={variables}>
        <Navbar />
        <Home />
        <Lessons />
        <Petas />
        <About />
      </context.Provider>
    </>
  )
}

export default App
