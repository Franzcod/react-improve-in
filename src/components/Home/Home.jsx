/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"

import Band from '../Band/Band'
import getBands from "./../../redux/actions"
import s from "./home.module.css"
import {Link} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"
import loadingImg from "./loadingImg.gif"



export default function Home() {
   
    const dispatch = useDispatch();

    const { isAuthenticated} = useAuth0();

    const [page, setPage] = useState({page:1, limit:6 ,filterCountry: '', filterGenre: ''});


    const bands = useSelector(state => state.bands);


    function filterCountry(value){
        setPage({...page ,filterCountry: value, filterGenre: ''})
        console.log(value)
    }

    function filterGenre(value){
        setPage({...page,filterCountry:'', filterGenre: value})
        console.log(value)
    }



    useEffect(() => {
        dispatch(getBands(page))
    }, [page]);

    
    return (
        <div className={s.divKing}>
            {isAuthenticated ? 
               (<div className={s.fullContainer}>

                    <div className={s.filters}>
                        <div className={s.country}>Country: 

                            <select name="country" id="country" onChange={({target})=>{filterCountry(target.value)}}>
                                <option value="">Select</option>
                                <option value="United States">United States</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Italy">Italy</option>
                            </select>
                        </div>
                        <div className={s.genre}>Genre: 
                        
                            <select name="genre" id="genre" onChange={({target})=>{filterGenre(target.value)}}>
                                <option value="">Select</option>
                                <option value="rock">Rock</option>
                                <option value="rock-roll">Rock & Roll</option>
                                <option value="hard-rock">Hard Rock</option>
                                <option value="grunge">Grunge</option>
                                <option value="power-metal">Power Metal</option>
                                <option value="heavy-metal">Heavy Metal</option>
                                <option value="black-metal">Black Metal</option>
                                <option value="progressive-metal">Progressive Metal</option>
                            </select>
                        </div>

                        <div  className={s.seeAll} onClick={()=>{setPage({page:1,limit:6, filterCountry: '', filterGenre: '' })}}>
                            See All
                        </div>
                    </div>
                   

                    <div className={s.bandsCont}>
                        {bands.length 
                            
                            ? <div>
                                    <div className={s.band}>
                                        {
                                            bands.map((el)=>{
                                                return <Link key={el.id} className={s.link} to={`/band/${el.id}`}>
                                                            <Band key={el.id} band={el}/>
                                                    </Link>
                                            })
                                        }
                            
                                    </div> 

                                    {
                                        bands.length === 6 
                                        ? <div className={s.pages}>
                                            <div className={s.btnPage} 
                                            onClick={()=>setPage({...page, page: 1})}>1</div>
                                            <div className={s.btnPage} 
                                            onClick={()=>setPage({...page,page:2})}>2</div>
                                        </div>
                                        : null
                                    }
                                    
                              </div>
                            
                              : <div>conection error </div>
                        }
                    </div>

                </div>)
                
                : (<div className={s.contSpinner}>
                    
                    
                        <img src={loadingImg} alt='loading'/>
                        
                    </div>)
            }
        </div>
    )
}
