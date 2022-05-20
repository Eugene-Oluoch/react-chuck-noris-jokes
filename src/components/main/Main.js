/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useEffect} from 'react';
import Api from '../api/Api';
import dice from './images/dice.png';
import './css/main.css'
import axios from 'axios';


let Main = ()=>{

    let [advice,useAdvice] = useState('')
    let [change,useChange] = useState('')

    let handleClick = ()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res=>{
            useChange('')
            useChange(res.data.value)
        })
    }

    useEffect(()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res=>{
            useAdvice('')
            useAdvice(res.data.value)
        })
        .catch(err=>console.log(err))
    },[])
    
    return(
        <>
            <article className="container">
                <div className="quote-number">
                    <p>CHUCK NORIS JOKES</p>
                </div>
                <div className="quote-desc">
                    <Api Advice={useAdvice} adviceContent={advice} changeContent={change} />
                </div>
                <div className="quotes-marks">
                    <h4>"</h4>
                </div>
                <div className="quotes-hr">
                    <hr />
                </div>
                <div className="quotes-button">
                    <button onClick={handleClick}><img src={dice} alt="" /></button>
                </div>
            </article>
        </>
    )

};


export default Main;