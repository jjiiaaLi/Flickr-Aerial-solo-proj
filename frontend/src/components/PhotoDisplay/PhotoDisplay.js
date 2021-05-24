import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePhoto, getPhotos } from "../../store/photos";
import styles from "./PhotoDisplay.css";

export default function PhotoDisplay() {
    const {id} = useParams();
    
    const dispatch = useDispatch();


    const photo = useSelector((state) => Object.values(state.photo));
    
    return (
      <div className='container'>
        <img className="selectedPhoto" src={photo[(id-1)].source} />
      </div>
    );
}
