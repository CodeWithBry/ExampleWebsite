import { useContext, useEffect, useRef, useState } from 'react'
import s from './Navbar.module.css'
import { context } from '../App'

const Navbar = () => {
    const { pages, setPages, tabs } = useContext(context)
    const indicatorRef = useRef(null)


    window.onscroll = () => {
        tabs.forEach((tab, index) => {
            const section = tab;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setPages(prev => prev.map((page, i) => ({
                    ...page,
                    ind: i === index
                })));
            }
        })
    }

    useEffect(() => {
        
        const indicator = indicatorRef.current;
        if (indicator && pages?.length > 0) {
            const activePage = pages.find(page => page.ind);
            if (activePage) {
                const linkElement = document.querySelector(`a[href="#${activePage.name.toLowerCase()}"]`);
                if (linkElement) {
                    indicator.style.left = `${linkElement.offsetLeft + linkElement.offsetWidth / 2 - indicator.offsetWidth / 2}px`;
                }
            }
        }
    }, [pages]);
    return (
        <div className={s.navBar}>
            <div className={s.logo}>
                <img src="/code.png" alt="Logo" />
                <h1>WebDev</h1>
            </div>
            <div className={s.navLinks}>
                {pages?.map((page, index) => (
                    <li key={index} className={page.ind ? `${s.active} ${s.links}` : s.links}>
                        <a href={`#${page.name.toLowerCase()}`} className={s.navLinkText}
                            onClick={() => {
                                setPages(prev => prev.map(p => p.name === page.name ? { ...p, ind: true } : { ...p, ind: false }))
                                const indicator = indicatorRef.current;
                                if (indicator) {
                                    const linkElement = document.querySelector(`a[href="#${page.name.toLowerCase()}"]`);

                                    if (linkElement) {
                                        indicator.style.scale = '.5';
                                        indicator.style.left = `${linkElement.offsetLeft + linkElement.offsetWidth / 2 - indicator.offsetWidth / 2}px`;
                                    }
                                }
                            }} >
                            {page.name}
                            <div className={s.rootIndicator}>{page.name}</div>
                        </a>
                    </li>
                ))}
                <div className={s.indicator} ref={indicatorRef} ></div>
                <li className={s.hamburgerButton}>
                    <i className="fa fa-bars"></i>
                </li>
            </div>
        </div>
    )
}

export default Navbar