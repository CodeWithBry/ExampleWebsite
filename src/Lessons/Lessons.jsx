import { useEffect, useState, useRef, useContext } from 'react';
import s from './Lessons.module.css';
import { context } from '../App';

const Lessons = () => {
    const { setLessonsPage, pages } = useContext(context)
    const lessonsRef = useRef()
    const lessonsBoxRef = useRef()
    const [lessons, setLessons] = useState();

    function slideElement(bool) {
        const e = lessonsBoxRef.current
        const scrollAmount = 350


        bool == 1 ? e.scrollBy({ left: scrollAmount, behavior: 'smooth' }) : e.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/ExampleWebsite/JSONFiles/data.json');
                const data = await response.json();
                console.log(data)
                setLessons(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        if (lessonsRef?.current) {
          setLessonsPage(lessonsRef.current)
        }
      }, [lessonsRef])


    return (
        <div className={!pages[1]?.hideComponents ? `${s.show} ${s.lessonsWrapper}` : `${s.hide} ${s.lessonsWrapper}`} id='lessons' ref={lessonsRef}>
            <div className={s.top}>
                <h1 className={!pages[1]?.hideComponents ? s.showTitle : null}>LESSONS FOR THE WHOLE YEAR</h1>
            </div>

            <div className={s.bottom}>
                 <button id={s.toLeft} onClick={() => { slideElement(0) }}>
                        <i className="	fa fa-angle-left"></i>
                    </button>
                    <button id={s.toRight} onClick={() => { slideElement(1) }}>
                        <i className="	fa fa-angle-right"></i>
                    </button>
                <div className={s.lessonsBox} ref={lessonsBoxRef}>

                    {lessons?.map((con, i) => {
                        return <div className={!pages[1]?.hideComponents ? `${s.showCard} ${s.lessonWrapper}` : `${s.hideCard} ${s.lessonWrapper}`}>
                            <div className={s.imageContainer}>
                                <img src={con.src} ttile={con.src} />
                            </div>
                            <div className={s.contentBox}>
                                <h3>{con.title}</h3>
                                <p>{con.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Lessons