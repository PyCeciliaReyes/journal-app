import { Box } from "@mui/material"
import { NavBar } from "../components";

const drawerWidth = 240;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        {/* navbar */}
        <NavBar drawerWidth={ drawerWidth } />
        {/* sidebar */}
        <Box
            component='main'
            sx={{flexGrow:1, p:3}}
        >
            {/* toolbar */}
            {children}
        </Box>
    </Box>
  )
}
