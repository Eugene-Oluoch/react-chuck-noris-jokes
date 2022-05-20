/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';



let Api = ({Advice,adviceContent,changeContent})=>{

    return(
        <>
            <p>"{changeContent?changeContent:adviceContent}"</p>
        </>
    )

};


export default Api;