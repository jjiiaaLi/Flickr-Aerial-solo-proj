import {useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addPhoto} from '../../store/photos';
import {getTags} from '../../store/tag';
import styles from './AddPhoto.css';





export default function AddPhoto(){
    const [source, setSource]= useState('');
    const [tagId, setTagId]= useState(1);
    const [caption, setCaption] = useState('');
    const dispatch=useDispatch();
    const history=useHistory();
    const userId = useSelector((state) => state.session.user.id);
    const tags=useSelector(state=>Object.values(state.tags));




    useEffect(()=>{
      dispatch(getTags())
    },[dispatch])
    
    useEffect(()=>{
      console.log(tagId)
    },[tagId])

    const onSubmit=async(e)=>{
        e.preventDefault();

        const data={
          source,userId,tagId,caption,
        }
        
        const addPhotoSucsess = await dispatch(addPhoto(data));
        //if addPhotoSuccess.....else show error
        history.replace('/')
    }
    return (
      <div className="main">
        <div className="addPhotoDiv">
          <h2 className="addPhotoTitle">Add A Photo</h2>
          <input
            type="text"
            placeholder="photo link..."
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <label>Select A Tag</label>
          <select value={tagId} onChange={(e) => setTagId(e.target.value)}>
            {tags.map((tag) => (
              <option value={tag.id}>{tag.name}</option>
            ))}
          </select>
          <label>Caption</label>
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption..."
          />
          <button className='addBtn' onClick={onSubmit}>Add</button>
        </div>
      </div>
    );
}