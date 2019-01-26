import {ADD_POST,REMOVE_POST} from "../actionTypes";
const defaultState =[{
    id:null,
    url:null
}]
export default (state=defaultState,action)=>{
    switch(action.types){
        // case ADD_POST:
        //     const posts = action.posts.map(post=>{
        //         return{
        //             id: post._id,
        //             url: post.url,
        //         }
        //     })
        //     return [...state,...posts];
        // case REMOVE_POST:
        //     return state.filter(post=>post.id!=action.id);
        default:
            return state;
    }
}