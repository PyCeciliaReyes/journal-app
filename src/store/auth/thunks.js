import { singInWithGoogle } from '../../firebase/providers';
import {checkingCredentials, login, logout} from './authSlice';

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        //console.log(result)
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}