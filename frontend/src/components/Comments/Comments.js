import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoComments, submitComment } from "../../store/comment";
import {loadUsers} from '../../store/users'
import styles from './Comments.css';

export default function Comments() {
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user.id);
  const { id } = useParams();
  const comments=useSelector(state=>Object.values(state.comment));
  const userList=useSelector(state=>Object.values(state.users));
  useEffect(() => {
    dispatch(getPhotoComments(id));
    dispatch(loadUsers());
  }, [dispatch]);
  const onSubmit= async(e)=>{
    e.preventDefault();
    const data={
      newComment,userId,id
    }
    let submitCommentSuccess = await dispatch(submitComment(data));
    setNewComment('')
  }
  return (
    <div className="commentBox">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div className="comment">
          <div className="commentAuthor">
            {userList.map((user) => {
              if (user.id === comment.userId) {
                return user.username;
              }
            })}
          </div>
          {comment.content}
        </div>
      ))}
      <form onSubmit={onSubmit} className="addComment">
        <textarea
          className="newCommentArea"
          rows="5"
          cols="80"
          placeholder="New Comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="submitComment" type="submit">
          Comment
        </button>
      </form>
    </div>
  );
}
