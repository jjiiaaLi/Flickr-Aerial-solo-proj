import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/photos";
import styles from './CreateAlbum.css';




export default function CreateAlbum() {
    const dispatch = useDispatch();
    const photos = useSelector((state) => Object.values(state.photo));

    useEffect(() => {
      dispatch(getPhotos());
    }, [dispatch]);

    

    const photosToAdd=[]
    
    console.log(photosToAdd)
  return (
    <div className="createAlbumContainer">
      <div className="imageSelectBox">
        {photos.map((photo) => (
          <div className="photoSelectionDiv">
            <label className="choosePhoto" htmlFor={photo.id}>
              <img className='eachPhoto' src={photo.source} />
            </label>
            <input
              type="checkbox"
              id={photo.id}
              onClick={e=>photosToAdd.push(photo.id)}
              value={photo.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
