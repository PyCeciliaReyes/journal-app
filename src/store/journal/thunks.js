import { doc, setDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        //console.log(getState())

        //tomar el uid del user
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`));
        const setDocResp = await setDoc( newDoc, newNote );
        console.log({newDoc, setDocResp});

        //dispatch
        //dispatch(newNote)
        //dispatch(activarNote)
    }
}