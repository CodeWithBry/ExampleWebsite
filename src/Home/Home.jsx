import React, { useContext, useEffect, useRef } from 'react'
import s from './Home.module.css'
import { context } from '../App'

const Home = () => {
  const { setHomePage, pages } = useContext(context)
  const homePage = useRef(null)

  useEffect(() => {
    if (homePage?.current) {
      setHomePage(homePage.current)
      console.log(pages[0].hideComponents)
    }
  }, [homePage])

  return (
    <div className={pages[0]?.hideComponents ? `${s.hideComponents} ${s.home}` : `${s.home} ${s.animate}` } id="home" ref={homePage}>
      <div className={s.left}>
        <h1>Welcome Students!</h1>
        <p>This is an example website built through HTML, CSS and Javascript. Start creating your personal website my dear students!</p>

        <div className={s.buttons}>
          <button>
            <a href="#petas">PETAs</a>
          </button>
          <div className={s.platforms}>

            <button>
              <img src="./facebook.png" alt="facebook" title='facebook' />
              <p>Facebook</p>
            </button>
            <button>
              <img src="./Instagram.png" alt="instagram" title='instagram' />
              <p>Instagram</p>
            </button>
            <button>
              <img src="./gmail.png" alt="gmail" title='gmail' />
              <p>Gmail</p>
            </button>
          </div>
        </div>

      </div>
      <div className={s.right}>
        <img src="./Sarah.png" alt="" />

      </div>
    </div>
  )
}

export default Home