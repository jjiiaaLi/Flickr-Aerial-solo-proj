

const LOAD= 'tag/LOAD';

const load=(tags)=>({
    type:LOAD,
    tags:tags
})


export const getTags= () => async dispatch => {
    const res = await fetch('/api/tag');
   
    if(res.ok){
        
        const tags= await res.json();
       
        dispatch(load(tags))
    }
}

export default function tagReducer(state={},action){
    let newState={};
    switch(action.type){
        case LOAD:
            newState={};
            action.tags.forEach(tag=>{
                newState[tag.id]=tag
            })
            return newState;
        default:
            return state;
    }
}