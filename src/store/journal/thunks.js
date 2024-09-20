import { doc, setDoc, collection, deleteDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deteleNoteById } from "./";
import { loadNotes, fileUpload } from "../../helpers";


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
            imageUrls: [],
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

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        if(!uid) throw new Error('el uid del user no existe');
        //console.log({uid})
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));

    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        //console.log(noteToFirestore)
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFirestore, {merge:true});

        dispatch(updateNote(note));
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());
        //await fileUpload(files[0]);
        const fileUploadPromises = [];

        for (const file of files ){
            fileUploadPromises.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(fileUploadPromises);
        //console.log(photosUrls);
        dispatch(setPhotosToActiveNote(photosUrls));
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        //console.log({uid,note});
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await deleteDoc(docRef);

        dispatch(deteleNoteById(note.id));
    }
}