import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './Home/Home'

import Navbar from './Navbar/Navbar'
import Lessons from './Lessons/Lessons'
import Petas from './Petas/Petas'
import About from './About/About'
import SideBar from './SideBar/SideBar'

export const context = createContext()

function App() {

  const [pages, setPages] = useState([
    { name: 'Home', ind: true, class: "fa fa-home", hideComponents: false },
    { name: 'Lessons', ind: false, class: "	fa fa-book", hideComponents: true },
    { name: 'PETAs', ind: false, class: "fa fa-cubes", hideComponents: true },
    { name: 'About', ind: false, class: "	fa fa-address-book", hideComponents: true }
  ])
  const [body, setBody] = useState(document.body)
  const [homePage, setHomePage] = useState(false)
  const [petasPage, setPetasPage] = useState(false)
  const [lessonsPage, setLessonsPage] = useState(false)
  const [aboutPage, setAboutPage] = useState(false)
  const [hideSideBar, setHideSideBar] = useState(true)
  const [tabs, setTabs] = useState([])

  const variables = {
    // numeric variables

    // boolean variables
    hideSideBar, setHideSideBar,

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

  useEffect(() => {
    setTabs([homePage, lessonsPage, petasPage, aboutPage])
  }, [homePage])

  useEffect(() => {
    console.log(tabs)
  }, [tabs])

  return (
    <>
      <context.Provider value={variables}>
        <Navbar />
        <SideBar />
        <Home />
        <Lessons />
        <Petas />
        <About />
      </context.Provider>
    </>
  )
}

export default App
