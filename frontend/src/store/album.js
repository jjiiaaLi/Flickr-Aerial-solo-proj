import { csrfFetch } from "./csrf";

const LOAD = 'album/LOAD';
const CREATE = "album/CREATE";

const load = (albums) =>({
    type:LOAD,
    albums:albums,
})

const create = (newAlbum) => ({
  type: CREATE,
  newAlbum: newAlbum,
});

export const loadAlbums = (albums) =>async dispatch=>{
    const res= await fetch(`/api/album`);

    if(res.ok){
        const albums=await res.json()
        dispatch(load(albums))
    }
}

export const createAlbum = (newAlbum) => async (dispatch) => {
  const res = await csrfFetch(`/api/album`,{
      method:'post',
      headers:{
          'Content-Type': 'application/json',
      },
      body:JSON.stringify(newAlbum),
  });

  if(res.ok){
      const newAlbum = await res.json();
      dispatch(create(newAlbum));
      return newAlbum;
  }
};

export default function albumReducer(state={},action){
    let newState={};
    switch(action.type){
        case LOAD:
            newState={};
            action.albums.forEach(album=>{
                newState[album.id]=album;
            });
            return newState;
        case CREATE:
            newState={...state};
            newState[action.newAlbum.id]=action.newAlbum;
            return newState;
        default:
            return state;    
    }
}