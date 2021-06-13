import produce from 'immer';

const INITIAL_STATE = {
    token:null,
    signed:false,
    id:0,
};

export default function auth(state = INITIAL_STATE , action){
    switch(action.type){
        case '@auth/SIGN_IN_SUCCESS':
            return produce(state, draft =>{
                draft.token = action.payload.token;
                draft.signed = true;
                draft.id    = action.payload.user.id
            });
        
        case '@auth/SIGN_OUT':
            return produce(state, draft =>{
                draft.token = null;
                draft.signed = false;
                draft.id=0;
            });
        

        default:
            return state;
    }
}