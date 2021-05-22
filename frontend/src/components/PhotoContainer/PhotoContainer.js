import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPhotos } from '../../store/photos';
import styles from './PhotoContainer.css';

const PhotoContainer = () =>{
    const dispatch = useDispatch();
    const photos = useSelector((state)=>Object.values(state.photo));
    
    useEffect(()=>{
        dispatch(getPhotos())
    },[dispatch])

    return (
      <div className="photoContainer">
        <h2>photos are loading</h2>
        {photos.map((image) => (
          <Link key={image} to={`/photo/${image.id}`}>
            <img className="image" src={image.source} />
          </Link>
        ))}
      </div>
    );

}

export default PhotoContainer;