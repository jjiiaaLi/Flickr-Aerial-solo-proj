import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/photos";
import styles from "./SearchResult.css";

const SearchResult = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => Object.values(state.photo));

  

  return (
    <div className="photoContainer">
      {photos.map((image) => (
        <Link key={image} to={`/photo/${image.id}`}>
          <img className="image" src={image.source} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
