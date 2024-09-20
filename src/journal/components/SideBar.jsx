import { useState } from "react";
import { useSelector } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Divider, Drawer, IconButton, List, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { SideBarItem } from './SideBarItem';

export const SideBar = ({drawerWidht=240}) => {
    const {displayName} = useSelector( state => state.auth)
    const {notes} = useSelector( state => state.journal)

    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const handleDrawerToggle = () => {
        
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box 
            component='nav'
            sx={{width:{sm:drawerWidht}, flexShrink: {sm:0}}}
        >
            
             {isMobile && !mobileOpen && (
                <IconButton 
                    color="inherit" 
                    aria-label="open drawer" 
                    edge="start" 
                    onClick={handleDrawerToggle}
                    sx={{ position: 'absolute', left: 0, top: 0, zIndex: 1300 }}
                >
                    <MenuIcon color="primary" />
                </IconButton>
            )}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? mobileOpen : true}
                onClose={handleDrawerToggle}
                sx={{
                    display: {xs:'block'},
                    '& .MuiDrawer-paper': {boxSizing:'border-box', width: drawerWidht}
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component='div'
                    >
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {
                        notes.map( note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }

                </List>
            </Drawer>
        </Box>
  )
}


