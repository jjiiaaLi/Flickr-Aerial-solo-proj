import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePhoto, getPhotos } from "../../store/photos";
import styles from "./PhotoDisplay.css";

export default function PhotoDisplay() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => Object.values(state.photo));
    const displayPhotoUrl= photos[0]
      

    
    useEffect(()=>{
      dispatch(getSinglePhoto(id))
    },[dispatch])

    
    return (
      <div className='container'>
        <img className="selectedPhoto" src={displayPhotoUrl.source} />
      </div>
    );
};