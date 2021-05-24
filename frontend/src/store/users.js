
const LOAD='/users/LOAD';

const load=(users)=>({
    type:LOAD,
    users:users
})

export const loadUsers=()=>async dispatch =>{
    const res= await fetch('/api/users');

    if(res.ok){
        const users= await res.json();
        dispatch(load(users))
    }
}

export default function usersReducer(state={},action){
    let newState={};
    switch(action.type){
        case LOAD:{
            newState={};
            action.users.forEach(user=>{
                newState[user.id]=user
            })
            return newState;
        };
        default:
            return state
    }
}