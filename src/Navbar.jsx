import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tabs from '@mui/material/Tabs';

import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Topbar from './Topbar';
import Title2 from './Title2';
import Title from './Title';
import Searchbar from './Searchbar';
import { flexbox } from '@mui/system';
import TabTable from './components/chargers/TabTable';
import Cards from './Cards';
import Googlemaps from './Googlemaps';  
import '@goongmaps/goong-geocoder-react/dist/goong-geocoder.css'
import SignIn from './components/signIn/SignIn'
import logo from './images/logo.svg';
//import LineChart from './LineChart';
//import { Link as RouterLink, Route, MemoryRouter } from 'react-router-dom';

import {
  
  Container, 
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch, Route,
} from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);





export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
   
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className="header1" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '21px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        <Searchbar/>
       
        </Toolbar>

      </AppBar>

      <Router> 
      <Drawer variant="permanent" anchor="left" open={open}>
        <DrawerHeader>
          <Box sx={{pt:0.5}}>
           <img src={logo} alt="Logo" />
           </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        
        <List>
            <Link to="/" >
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>
            </Link>
            <Link to="/Chargers" >
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Chargers"} />
              </ListItem>
            </Link>
          </List>
       
      </Drawer>
      <Switch>
       <Box component="main" sx={{ flexGrow: 1,pt:10,pb:10, bgcolor:'#F6F8FB' }}>
       

          <Route exact path="/">
           
            <Container>
            <Title2/>
             <Googlemaps/>
              
            </Container>
          </Route>
          <Route exact path="/chargers">
            <Container sx={{pt:1,mt:2}}>
              <Title/>
              
              <Cards/>
            <TabTable/>

            </Container>
          </Route>
       
  
      </Box>
      </Switch>
   
      </Router>
      
    </Box>
   
  );
}
