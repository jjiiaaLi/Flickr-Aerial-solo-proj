
const LOAD='comment/LOAD';
const CREATE='comment/CREATE';

const load = comments =>({
    type:LOAD,
    comments:comments,
})

const create= comment =>({
    type:CREATE,
    comment:comment,
})

export const getPhotoComments = (photoId)=> async dispatch =>{
    const res= await fetch(`/api/comment/${photoId}`);

    if(res.ok){
        const comments=await res.json();
        dispatch(load(comments))
    }
};

export const createComment = data => async dispatch =>{

    const res= await fetch(`/api/comment`,{
        method:'post',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    })
    if(res.ok){
        const comment = await res.json();
        dispatch(create(comment))
        return comment;
    }
}



export default function commentReducer(state={},action){
    let newState={}
    switch(action.type){
        case LOAD:
            newState={}
            action.comments.forEach(comment=>{
                newState[comment.id]=comment
            })
            return newState;
        case CREATE:
            newState={...state};
            newState[action.comment.id]=action.comment;
            return newState;
        default:
            return state
    }
}
