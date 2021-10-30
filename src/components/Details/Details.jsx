/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import MemberComp from '../Band/memberComp/MemberComp'
import getBandDetail from "./../../redux/getDetailsAction"
import getAlbums from "./../../redux/getAlbumsAction"
import getNewsBand from "./../../redux/getNewsAction"
import s from "./details.module.css"
import Albums from '../Band/albumsComp/Albums'
import NewsCard from './newsComp/newCard'
// import {Link} from "react-router-dom"
import loadingImg from "./loadingImg.gif"

export default function Details(props) {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    const detailBandData = useSelector(state => state.bandDetail) 
    const albumsData = useSelector(state => state.albums) 
    const newsBand = useSelector(state => state.news) 

    // console.log('id detail =>',props.match.params.id)

    useEffect(() => {
        dispatch(getAlbums(props.match.params.id))
        dispatch(getBandDetail(props.match.params.id)).then((res)=> {
            
            dispatch(getNewsBand(res.payload.name)).then(()=> {
                // console.log(newsBand.articles[1].media)
                setLoading(false)
            
            })
            
        })
        
    }, []);

    return (
        <div className={s.container}>
            {
                !loading
                ? <div className={s.contDetail}>
                    <div className={s.top}>
                        <div className={s.name}>
                            <div>{detailBandData.name}</div>
                            <div className={s.extra}>{detailBandData.year} - { detailBandData.genreCode}</div>
                        </div>
                        <div className={s.blob} style={{backgroundImage:`url(${detailBandData.image})`}}></div>
                    </div>
                    <div className={s.gradient}></div>
                    <div className={s.title}>Members</div>
                    <div className={s.members}>
                        {
                            detailBandData.members.map((member, i) => {
                                
                                return <MemberComp key={i}  member={member.name}/>
                            })
                        }
                    </div>

                    <div className={s.title}>Albums</div>

                    <div className={s.contAlbums}>
                        {
                            albumsData.length 
                            
                            ? albumsData.map((album, i) => {
                                
                                return <Albums key={i}  album={album}/>
                            })
                            : <div className={s.title}>
                                <p>No  Albums data</p>
                              </div>
                        }
                    </div>

                    <div className={s.gradient2}></div>
                    
                    <div className={s.title2}>Last News</div>

                    <div className={s.news}>
                        {
                            newsBand.articles 
                            ? newsBand.articles.map((article, i) => {
                                // console.log(article.link);
                                return <NewsCard key={i} data={article}/> 
                                      
                            })
                            : <div>no hay</div>
                        }
                    </div>

                    

                  </div>
                : (<div className={s.contSpinner}>
                    
                    
                    <img src={loadingImg} alt='loading'/>
                    
                </div>)
            }
        </div>
    )
}
