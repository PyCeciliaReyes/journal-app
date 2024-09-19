import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { startNewNote } from "../../store/journal";


export const JournalPage = () => {
  const dispatch = useDispatch();
  const {isSaving, active} = useSelector(state => state.journal); //isSaving === true

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }
  
  return (
    <JournalLayout>

      {
        (!!active)
          //note view
          ? <NoteView />
           //nothing selected view
          : <NothingSelectedView />
      }

       <IconButton
          disabled = {isSaving}
          onClick={onClickNewNote}
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': {backgroundColor: 'error.main', opacity: 0.9},
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
       >
          <AddOutlined sx={{fontSize: 30}} />

       </IconButton>

    </JournalLayout>
  )
}

