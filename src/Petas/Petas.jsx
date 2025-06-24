import { useContext, useRef, useEffect } from 'react';
import s from './Petas.module.css';
import { context } from '../App';

const Petas = () => {
    const { setPetasPage, pages } = useContext(context)
    const petasRef = useRef(null)

    useEffect(() => {
        if (petasRef?.current) {
            setPetasPage(petasRef.current)
        }
    }, [petasRef])

    return (
        <section className={pages[2]?.hideComponents ? `${s.hideComponents} ${s.petas}` : `${s.animate} ${s.petas}`} id='petas' ref={petasRef}>
            <div className={s.row}>
                <div className={s.projectDivs}>
                    <h2>Quarter 1: PETA 1 - </h2>
                    <div className={s.projectWrapper}></div>
                </div>
                <div className={s.projectDivs}>
                    <h2>Quarter 2: PETA 2 - </h2>
                    <div className={s.projectWrapper}></div>
                </div>
            </div>
            <div className={s.row}>
                <div className={s.projectDivs}>
                    <h2>Quarter 3: PETA 3 - </h2>
                    <div className={s.projectWrapper}></div>
                </div>
                <div className={s.projectDivs}>
                    <h2>Quarter 4: PETA 4 - </h2>
                    <div className={s.projectWrapper}></div>
                </div>
            </div>
        </section>
    )
}

export default Petas