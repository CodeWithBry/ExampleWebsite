import { useEffect, useState, useRef, useContext } from 'react';
import s from './Lessons.module.css';
import { context } from '../App';

const Lessons = () => {
    const { setLessonsPage } = useContext(context)
    const [lessons, setLessons] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const lessonsRef = useRef(null)

    useEffect(() => {
        if (lessonsRef?.current) {
            setLessonsPage(lessonsRef.current)
        }
    }, [lessonsRef])

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



    return (
        <section className={s.lessons} id="lessons" ref={lessonsRef}>
            <div className={s.wrapper}>
                <div className={s.left}>
                    {lessons?.map((pro, i) => {
                        return <img src={pro.src} title={pro.img} className={pro.ind ? `${s.show} ${s.image}` : `${s.hide} ${s.image}`} />
                    })}
                </div>
                <div className={s.right}>
                    {lessons?.map((pro, i) => {
                        return (
                            <div className={pro.ind ? `${s.show} ${s.wrapper}` : `${s.hide} ${s.wrapper}`} key={i + pro.title}>
                                <h2><span>{pro.title}</span></h2>
                                <div className={s.contentWrapper}>
                                    <div className={s.content}>
                                        {pro.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={s.buttons}>
                <button
                    className={activeIndex > 0 ? s.abled : s.disabled}
                    onClick={() => {
                        if (activeIndex > 0) {
                            setActiveIndex((prevIndex) => prevIndex - 1);
                            setLessons(prev => prev.map((item, index) => (
                                index === activeIndex - 1 ? { ...item, ind: true } : { ...item, ind: false }
                            )))
                        }
                    }}> <i className='fa fa-arrow-left'></i> </button>
                <button
                    className={activeIndex < 3 ? s.abled : s.disabled}
                    onClick={() => {
                        if (activeIndex < 3) {
                            setActiveIndex((prevIndex) => prevIndex + 1);
                            setLessons(prev => prev.map((item, index) => (
                                index === activeIndex + 1 ? { ...item, ind: true } : { ...item, ind: false }
                            )))
                        }
                    }}><i className='fa fa-arrow-right'></i></button>
            </div>
        </section>
    )
}

export default Lessons