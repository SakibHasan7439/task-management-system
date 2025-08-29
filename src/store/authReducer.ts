type AuthState = {
    user: string | null
};

const initialState: AuthState = {
    user: "Admin"
};

type Action = | { type: "LOGIN"; payload: string }
  | { type: "LOGOUT" };


export const authReducer = (state = initialState, action: Action):AuthState => {
    switch(action.type){
        case 'LOGIN':
            return {...state, user: action.payload};
        case 'LOGOUT':
            return {...state, user: null};

        default:
            return state;
    }
}