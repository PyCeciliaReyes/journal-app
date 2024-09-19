import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: false, //true
       messageSaved: '',
       notes: [],
       active: null,
    //    active:{
    //     id:'ABC123',
    //     title:'',
    //     body:'',
    //     date:1234567,
    //     imageUrls: [], //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg
    //    }

   },
   reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
       addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
       },
       setActiveNote: (state, action) => {
            state.active = action.payload;
       },
       setNotes: (state, action) => {
            state.notes = action.payload;
       },
       setSaving: (state) => {
          state.isSaving = true;
          //todo: mensaje de error
       },
       updateNote: (state, action) => {
          state.isSaving = false,
          state.notes = state.notes.map( note => {
               if (note.id === action.payload.id) {
                    return action.payload;
               }
               return note;
          });
          //rodo: mostrar mensake de actaulizacion

       },
       deteleNoteById: (state, action) => {

       },
   }
});


// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote, 
    setNotes, 
    setSaving, 
    updateNote, 
    deteleNoteById, 
} = journalSlice.actions;