import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {FirebaseAuth} from './config'

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async() => {


    try{
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        //console.log({credentials});
        const {displayName, email, photoURL, uid} = result.user;
        //console.log({user});
        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
    }
}