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
    let albumArr=[];

    if(album){
      albumArr=album.split(',')
    }
    
    const albumPhoto = (photoId, photos) => {
      const result = photos.filter(photo=>{
        if(photo.id===Number(photoId)){
          return photo.source
        }
      })
      return result[0].source
    };

    useEffect(()=>{
        dispatch(getPhotos())
        dispatch(loadAlbums())
    },[dispatch])


    return (
      <div className="viewAlbumsContainer">
        <div className="albumsList">
          {albums.map((album) => (
            <button
              className='albumBtn'
              value={album.photos}
              onClick={(e) => setAlbum(e.target.value)}
              to={`/viewAlbums/${album.id}`}
            >
              {album.name}
            </button>
          ))}
        </div>
        <div className="albumShowBox">
          <div className='eachPhotoContainer'>
            {albumArr && albumArr.map(photoId=>{
              return (
              <Link to={`/photo/${photoId}`}>
                <img className='eachPhotoInAlbum' src={albumPhoto(photoId,photos)} />
              </Link>)
            })
            }
          </div>
        </div>
      </div>
    );
}
