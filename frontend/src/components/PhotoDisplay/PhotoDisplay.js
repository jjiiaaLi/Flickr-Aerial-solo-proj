import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePhoto, getPhotos } from "../../store/photos";
import styles from "./PhotoDisplay.css";

export default function PhotoDisplay() {

    //grabs id from url
    const {id} = useParams();

    const dispatch = useDispatch();

    //grabs all photos from state
    const photos = useSelector((state) => Object.values(state.photo));
    
    //filters state of all photos for the one with the correct id
    const targetPhoto=photos.filter(photo=>{
      if(photo.id=== Number(id)){
        return photo
      }
    })

    //targetPhoto is an array with one thing in it so im just getting it out, not needed but I did it anyway
    const displayPhotoUrl=targetPhoto[0]
    
    
    return (
      <div className='container'>
        <img className="selectedPhoto" src={displayPhotoUrl.source} />
      </div>
    );
};