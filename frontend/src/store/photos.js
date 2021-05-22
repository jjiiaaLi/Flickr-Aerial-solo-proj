

const LOAD= 'photo/LOAD';
const GET_ONE='photo/LOAD_ONE';

const load = photos =>({
    type:LOAD,
    photos:photos,
})

const getOne = photo =>({
    type:GET_ONE,
    photo:photo
})

export const getSinglePhoto = (id) => async dispatch =>{
    const res= await fetch(`/api/photo/${id}`);

    if(res.ok){
        const photo = await res.json();
        dispatch(getOne(photo))
    }
};

export const getPhotos = () => async dispatch =>{
    const res = await fetch('/api/photo');

    if(res.ok){
        const photos= await res.json();
        dispatch(load(photos))
    }
};

const initialState = {};

export default function photoReducer(state=initialState, action){
    
    switch(action.type){
        case LOAD: {
            const newState={};
            action.photos.forEach(photo=>{
                newState[photo.id]=photo
            })
            return newState;
        };
        case GET_ONE:
            const newState={}
            newState[action.photo.id]=action.photo
            return newState;
        default:
            return state
    }
}