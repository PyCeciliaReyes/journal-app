import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
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

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
        console.log(email, password, displayName)
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        //console.log(resp);
        //todo: actualizar el displpayName en firebase
        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return{
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return{ 
            ok: false, 
            errorMessage: error.message
        }
    }
}