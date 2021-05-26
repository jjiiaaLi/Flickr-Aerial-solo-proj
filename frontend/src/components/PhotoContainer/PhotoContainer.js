import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPhotos } from '../../store/photos';
import styles from './PhotoContainer.css';
import upload from './image/upload.png';

const PhotoContainer = () =>{
    const dispatch = useDispatch();
    const photos = useSelector((state)=>Object.values(state.photo));
    
    useEffect(()=>{
        dispatch(getPhotos())
    },[dispatch])
    

    return (
      <div className="photoContainer">
        <Link to="/add">
          <img className="uploadImage" src={`${upload}`} />
        </Link>
        <Link to='/createAlbum' >
          Create Album
        </Link>
        <div className="photoBucket">
          {photos.map((image) => (
            <Link key={image} to={`/photo/${image.id}`}>
              <img className="image" src={image.source} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default PhotoContainer;