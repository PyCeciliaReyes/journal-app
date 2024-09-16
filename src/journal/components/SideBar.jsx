import TurnedInNot from "@mui/icons-material/TurnedInNot";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";


export const SideBar = ({drawerWidht=240}) => {
  return (
    <Box 
        component='nav'
        sx={{width:{sm:drawerWidht}, flexShrink: {sm:0}}}
    >
        <Drawer
            variant="permanent"
            open
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
                    List
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['enero', 'febrero', 'marzo', 'abril'].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Incididunt ea non dolore labore occaecat.'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }

            </List>
        </Drawer>
    </Box>
  )
}


