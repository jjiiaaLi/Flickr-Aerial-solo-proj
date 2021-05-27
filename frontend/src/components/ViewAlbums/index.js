import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadAlbums, removeAlbum} from '../../store/album';
import styles from "./ViewAlbums.css";
import { getPhotos } from "../../store/photos";
export default function ViewAlbums() {
    const [album, setAlbum]= useState('');
    const [albumId, setAlbumId] = useState(0);
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

    const deleteAlbum=async(e)=>{
      await dispatch(removeAlbum(albumId))
      setAlbum('')
    }

    return (
      <div className="viewAlbumsContainer">
        <div className="albumsList">
          {albums.map((album) => (
            <button
              className="albumBtn"
              value={album.photos}
              onClick={(e) => {
                setAlbumId(album.id)
                setAlbum(e.target.value)}}
              to={`/viewAlbums/${album.id}`}
            >
              {album.name}
            </button>
          ))}
        </div>
        <div className="albumShowBox">
          <div className="eachPhotoContainer">
            {albumArr &&
              albumArr.map((photoId) => {
                return (
                  <Link to={`/photo/${photoId}`}>
                    <img
                      className="eachPhotoInAlbum"
                      src={albumPhoto(photoId, photos)}
                    />
                  </Link>
                );
              })}
          </div>
          <div className="deleteAlbumBtnContainer">
            {albumArr.length? (
              <button className="deleteAlbum" onClick={deleteAlbum}>
                Delete Album
              </button>
            ):(<h2 className='noAlbumSelectedText'>Please Select An Album</h2>)}
          </div>
        </div>
      </div>
    );
}
