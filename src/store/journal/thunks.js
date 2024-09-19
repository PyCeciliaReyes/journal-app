import { doc, setDoc, collection } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        //console.log(getState())

        //dispatch de savingNewNote
        dispatch(savingNewNote());

        //tomar el uid del user
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc( newDoc, newNote );
        //console.log({newDoc, setDocResp});
        newNote.id = newDoc.id;

        //dispatch(newNote)
        dispatch(addNewEmptyNote(newNote));
        //dispatch(activarNote)
        dispatch(setActiveNote(newNote));
    }
}