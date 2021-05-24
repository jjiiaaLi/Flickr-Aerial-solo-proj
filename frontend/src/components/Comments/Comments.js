import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoComments } from "../../store/comment";
import {loadUsers} from '../../store/users'

export default function Comments() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const { id } = useParams();
  const comments=useSelector(state=>Object.values(state.comment));
  const userList=useSelector(state=>Object.values(state.users));
  useEffect(() => {
    dispatch(getPhotoComments(id));
    dispatch(loadUsers());
  }, [dispatch]);
  console.log(userList)
  return (
    <div className="commentBox">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div className="comment">
          <div className="commentAuthor">{userList.map(user=>{
            if(user.id===comment.userId){
              return user.username
            }
          })}</div>
          {comment.content}
        </div>
      ))}
    </div>
  );
}
