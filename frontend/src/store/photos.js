import { csrfFetch } from "./csrf";

const LOAD = "photo/LOAD";
const GET_ONE = "photo/LOAD_ONE";
const ADD = "photo/ADD";

const load = (photos) => ({
  type: LOAD,
  photos: photos,
});

const getOne = (photo) => ({
  type: GET_ONE,
  photo: photo,
});

const add = (photo) => ({
  type: ADD,
  link: photo,
});

export const getSinglePhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/photo/${id}`);

  if (res.ok) {
    const photo = await res.json();
    dispatch(getOne(photo));
  }
};

export const getPhotos = () => async (dispatch) => {
  const res = await fetch("/api/photo");

  if (res.ok) {
    const photos = await res.json();
    dispatch(load(photos));
  }
};

export const addPhoto = (data) => async (dispatch) => {
  
  const res = await fetch("/api/photo", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (res.ok) {
    const photo = res.json();
    dispatch(add(photo));
  }
};

const initialState = {};

export default function photoReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case LOAD: {
      newState = {};
      action.photos.forEach((photo) => {
        newState[photo.id] = photo;
      });
      return newState;
    }
    case GET_ONE:
      newState = {};
      newState[action.photo.id] = action.photo;
      return newState;
    case ADD:
      newState = { ...state };
      newState[action.photo.id] = action.photo;
      return newState;
    default:
      return state;
  }
}
