import { Link ,useHistory} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/photos";
import styles from './CreateAlbum.css';
import {createAlbum} from '../../store/album';



export default function CreateAlbum() {
    const [name,setName]= useState('');

    const history=useHistory();
    const dispatch = useDispatch();
    const photos = useSelector((state) => Object.values(state.photo));
    const user = useSelector((state)=>Object.values(state.session))
    const userId = user[0].id
    
    useEffect(() => {
      dispatch(getPhotos());
    }, [dispatch]);

    let photosToAdd = [];    
    const addAlbum= async(e)=>{
        e.preventDefault();
        const photos=photosToAdd.join(',')
        const newAlbum={
            name,userId,photos
        }
        console.log(newAlbum)
        const createdAlbum= await dispatch(createAlbum(newAlbum));
        history.replace('/')
    }
    
    
  return (
    <div className="createAlbumContainer">
      <form className="albumCreationForm">
        <input className='nameInput' value={name} onChange={e=>setName(e.target.value)} placeholder="Album name..." />
        <div className="imageSelectBox">
          {photos.map((photo) => (
            <div className="photoSelectionDiv">
              <label className="choosePhoto" htmlFor={photo.id}>
                <img className="eachPhoto" src={photo.source} />
              </label>
              <input
                type="checkbox"
                id={photo.id}
                onClick={(e) => photosToAdd.push(photo.id)}
                value={photo.id}
              />
            </div>
          ))}
        </div>
        <button className='addAlbumBtn' onClick={addAlbum}>Create Album</button>
      </form>
    </div>
  );
}
