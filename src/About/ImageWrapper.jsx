import s from "./ImageWrapper.module.css"
import React from 'react'

const ImageWrapper = ({images, ind}) => {
    return (
        <div className={s.imageWrapper}>
            {images?.map((img, i) => {
                return <img
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