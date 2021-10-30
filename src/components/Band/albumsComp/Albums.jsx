import React from 'react'
import s from "./albums.module.css"
export default function Albums({album}) {
    // console.log(album)

    return (
        <a className={s.cont} href={`https://es.wikipedia.org/wiki/${album.name}` } target="_blank" rel="noreferrer nofollow">
        <div className={s.name}>{album.year}</div>
            <div className={s.img}>
                <img src={album.image} alt={album.name}/>
            </div>
            <div className={s.name}>{album.name}</div>
        
        </a>
    )
}
