import { TurnedInNot } from '@mui/icons-material'
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const SideBar = ({ drawerWidht = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidht }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent' //Temporary
        open  //Por defecto es true
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidht }
        }}
      >

        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Duquecito Castro
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Consectetur proident laboris occaecat.'} />
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
