import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>

        {/* navbar */}
        <NavBar drawerWidth={ drawerWidth } />

        {/* sidebar */}
        <SideBar drawerWidht={drawerWidth} />

        <Box
            component='main'
            sx={{flexGrow:1, p:3}}
        >
            <Toolbar/>
            {children}
        </Box>
    </Box>
  )
}