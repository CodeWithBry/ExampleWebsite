import s from "./ImageWrapper.module.css"
import React from 'react'

const ImageWrapper = ({toLeft, images, ind}) => {
    if(toLeft) return (
        <div className={`${s.toLeft} ${s.imageWrapper}`}>
            {images?.map((img, i) => {
                if((ind == i) || (ind-1 == i)) return <img
                    src={img}
                    key={img}
                    className={
                        ind == i ?
                            `${s.show} ${s.image}` :
                            `${s.hide} ${s.image}`
                    } />
            })}
        </div>
    )

    else return (
        <div className={toLeft == null ? s.imageWrapper :`${s.toRight} ${s.imageWrapper}`}>
            {images?.map((img, i) => {
                if((ind == i) || (ind+1 == i))return <img
                    src={img}
                    key={img}
                    className={
                        ind == i ?
                            `${s.show} ${s.image}` :
                            `${s.hide} ${s.image}`
                    } />
            })}
        </div>
    )
}

export default ImageWrapper