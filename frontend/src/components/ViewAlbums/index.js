import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadAlbums} from '../../store/album';
import styles from "./ViewAlbums.css";
import { getPhotos } from "../../store/photos";
export default function ViewAlbums() {
    const [album, setAlbum]= useState('')
    const dispatch=useDispatch();
    //get all the albums from state
    const albums = useSelector(state=>Object.values(state.albums))
    const photos = useSelector(state=>Object.values(state.photo))
    
    const photoIdArr=(string)=>{
      return string.split(',')
    }

    useEffect(()=>{
        dispatch(getPhotos())
        dispatch(loadAlbums())
    },[dispatch])


    return (
      <div className="viewAlbumsContainer">
        <div className="albumsList">
          {albums.map(album=>(
            <Link onClick={e=>setAlbum(album.photos)} to={`/viewAlbums/${album.id}`} >
                {album.name}
            </Link>
          ))}
        </div>
        <div className='albumShowBox'>
          {album && photoIdArr(album).map(id=>(
            photos.map(photo=>{
              if(photo.id===id){
                return photo.source
              }
            })
          ))}
        </div>
      </div>
    );
}
