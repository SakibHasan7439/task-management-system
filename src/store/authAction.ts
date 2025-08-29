import type { Dispatch } from "redux";

export const login = (user: string) => (dispatch: Dispatch) => {
    dispatch({type: 'LOGIN', payload: user});
}

export const logout = () => (dispatch: Dispatch) => {
    dispatch({type: 'LOGOUT'})
}