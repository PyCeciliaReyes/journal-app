import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Irure in laboris consectetur id nulla reprehenderit ea ipsum laboris occaecat. Nulla in labore nulla dolore et aliquip officia qui excepteur proident sit. Ex sit eiusmod ullamco ullamco nulla enim nulla laboris id aute Lorem id fugiat. Ut consequat excepteur adipisicing consectetur sit magna aliquip velit nisi et mollit non.</Typography>  */}
       {/*nothing selected  */}
       <NothingSelectedView />
       {/* note view */}
    </JournalLayout>
  )
}

