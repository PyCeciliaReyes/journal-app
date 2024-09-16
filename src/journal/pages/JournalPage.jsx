import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";


export const JournalPage = () => {
  return (
    <JournalLayout>
      
       {/*nothing selected  */}
       {/* <NothingSelectedView /> */}
       {/* note view */}
       <NoteView />

    </JournalLayout>
  )
}

