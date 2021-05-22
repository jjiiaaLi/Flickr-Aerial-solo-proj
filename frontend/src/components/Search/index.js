import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Search.css";


export default function Search(){
    const [searchContent, setSearchContent]= useState('')

  
    

    return (
        <div>
            <input type='text' name='searchContent' placeholder='Search Keyword...' value={searchContent} onChange={e=>setSearchContent(e.target.value)} />
            <button type='button' disabled={searchContent === ''} onClick={handleClick} /> 
        </div>
    )

}