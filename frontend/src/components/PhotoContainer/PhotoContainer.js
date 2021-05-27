import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPhotos,removePhoto } from '../../store/photos';
import styles from './PhotoContainer.css';
import upload from './image/upload.png';

const PhotoContainer = () =>{
    const [removePhotoId, setRemovePhotoId] =useState('')
    const dispatch = useDispatch();
    const photos = useSelector((state)=>Object.values(state.photo));
    
    useEffect(()=>{
        dispatch(getPhotos())
    },[dispatch])
    
    

    return (
      <div className="photoContainer">
        <div className="linkDiv">
          <Link to="/add">
            <img className="uploadImage" src={`${upload}`} />
          </Link>
          <Link to="/createAlbum">
            <button className="createAlbumBtn">Create Album</button>
          </Link>
          <Link to="/viewAlbums">
            <button className="viewAlbumBtn">View Albums</button>
          </Link>
        </div>
        <div className="photoBucket">
          {photos.map((image) => (
            <div className='EachphotoDiv'>
              <Link key={image} to={`/photo/${image.id}`}>
                <img className="image" src={image.source} />
              </Link>
              <button value={image.id} onClick={e=>{
                dispatch(removePhoto(image.id));
              }
                } className='deletePhotoBtn'>x</button>
            </div>
          ))}
        </div>
        
      </div>
    );
};

export default PhotoContainer;