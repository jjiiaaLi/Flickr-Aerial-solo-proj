import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/photos";
import { searchPhoto } from "../../store/photos";
import styles from "./SearchResult.css";


const SearchResult = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photo));

  

  return (
    <div className='resultOuter'>
      <div className="photoBox">
        {photos.map((image) => (
          <Link key={image} to={`/photo/${image.id}`}>
            <img className="image" src={image.source} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
