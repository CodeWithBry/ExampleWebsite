import s from "./SideBar.module.css"
import { context } from "../App"
import { useContext, useState } from "react"

const SideBar = () => {

    const { pages, setPages, tabs, hideSideBar, setHideSideBar } = useContext(context)

    return (
        <div className={!hideSideBar ? s.sideBarWrapper : s.hideSideBarWrapper}>
            <div className={!hideSideBar ? s.sideBarBox : s.hideSideBarBox}>
                <div className={s.top}>
                    <div className={s.titleAndPic} onClick={() => {
                            setHideSideBar(true)
                        }}>
                        <button
                            onClick={() => {
                                setHideSideBar(true)
                            }}>
                            <i className='fa fa-angle-right'></i>
                        </button>
                        <img src="./code.png" alt="Logo" />
                        <h3>WebDev</h3>
                    </div>
                </div>
                <hr />
                <ul className={s.tabs}>
                    {pages?.map((page, index) => (
                        <li key={index} className={page.ind ? `${s.active} ${s.links}` : s.links}>

                            <a href={`#${page.name.toLowerCase()}`} className={s.navLinkText}
                                onClick={() => {
                                    setPages(prev => prev.map(p => p.name === page.name ? { ...p, ind: true } : { ...p, ind: false }))
                                }} >
                                <i class={page.class}></i>
                                <p>{page.name}</p>
                            </a>
                            <hr className={page.ind == true ? s.indicate : s.unindicate} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar