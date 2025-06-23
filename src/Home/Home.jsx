import React, { useContext, useEffect, useRef } from 'react'
import s from './Home.module.css'
import { context } from '../App'

const Home = () => {
  const { setHomePage } = useContext(context)
  const homePage = useRef(null)

  useEffect(() => {
    if (homePage?.current) {
      setHomePage(homePage.current)
    }
  }, [homePage])

  return (
    <section className={s.home} id="home" ref={homePage}>
      <div className={s.left}>
        <h1>Welcome Students!</h1>
        <p>This is an example website built through HTML, CSS and Javascript. Start creating your personal website my dear students!</p>

        <div className={s.buttons}>
          <button>
            <a href="#petas">PETAs</a>
          </button>
          <div className={s.platforms}>

            <img src="./facebook.png" alt="facebook" title='facebook' />
            <img src="./Instagram.png" alt="instagram" title='instagram' />
            <img src="./gmail.png" alt="gmail" title='gmail' />
          </div>
        </div>

      </div>
      <div className={s.right}>
        <img src="./Sarah.png" alt="" />

      </div>
    </section>
  )
}

export default Home