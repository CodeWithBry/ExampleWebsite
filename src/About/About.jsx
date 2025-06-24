import { useContext, useRef, useEffect, useState } from "react"
import s from "./About.module.css"
import { context } from "../App"
import ImageWrapper from "./ImageWrapper"

const About = () => {
  const { setAboutPage, pages } = useContext(context)
  const aboutRef = useRef()
  const imgBox = useRef()
  const images = ["./Sarah1.jpg", "./Sarah2.jpg", "./Sarah3.jpg",]
  const [ind, setInd] = useState(0)
  const [toLeft, setToLeft] = useState(null)

  useEffect(() => {
    if (aboutRef?.current) {
      setAboutPage(aboutRef.current)
    }
  }, [aboutRef])


  return (
    <div className={pages[3]?.hideComponents ? `${s.hideComponents} ${s.about}` : `${s.animate} ${s.about}`} id="about" ref={aboutRef}>
      <div className={s.left}>
        <div className={s.wrapper}>
          <h1>About Me</h1>
          <p>
            I am Sarah Mae G. Dela Cruz, teacher in Information, Communication and Technology Grade-10 and I will guide you in the basics of programming and enhance your skills in graphics designing!
          </p>
          <br />
          <p>
            In my free time, I enjoy hiking, reading, and experimenting with new recipes. I'm always looking to learn and grow in my field, so feel free to reach out if you'd like to connect!
          </p>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.wrapper}>
          <h2>Pictures Of Me:</h2>
          <ImageWrapper 
            ind={ind}
            images={images}
            toLeft={toLeft}/>
          <div className={s.indicatorWrapper}>
            {
              images?.map((img, i)=>{
                return <div className={ind == i ? `${s.indicated} ${s.indicators}` : `${s.indicators}`}></div>
              })
            }
          </div>
          <div className={s.buttonsWrapper}>
            <button
              className={ind > 0 ?
                `${s.abled} ${s.slideButt}` :
                `${s.disabled} ${s.slideButt}`}
              onClick={() => {
                if (ind > 0) {
                  setInd(prev => prev - 1)
                  setToLeft(false)
                }
              }}>
              <i className='fa fa-arrow-left'></i>
            </button>
            <button
              className={ind < 2 ?
                `${s.abled} ${s.slideButt}` :
                `${s.disabled} ${s.slideButt}`}
              onClick={() => {
                if (ind < 2) {
                  setInd(prev => prev + 1)
                  setToLeft(true)
                }
              }}>
              <i className='fa fa-arrow-right'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About