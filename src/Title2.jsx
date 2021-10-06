import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import { spacing } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));
export default function FlexGrow() {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{p: 0, bgcolor:'#F6F8FB' }}>
      <Grid container >
      <Grid item xs={12} md={7}>
      <Box sx={{ pt:1.25, flexGrow: 1, }}><h3 className="title1"> Overview</h3></Box>
        </Grid>
        
        <Grid item xs={12} md={5} sx={{}}>
          <Box sx={{display:'flex',float:'right'}}>
        <Box sx={{ p: 1, }}>
        <Search className="search1">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search activity"
              inputProps={{ 'aria-label': 'Search' }}
            />
          </Search>
        </Box>
        
        <Box sx={{pt:1, }}>
        <Button sx={{p:1,m:0,}} variant="contained" endIcon={<DashboardIcon/>}></Button>
        

        </Box>
        <Box sx={{pt:1,pl:1, }}>
        
        <Button sx={{p:1,}} variant="contained" endIcon={<HorizontalSplitIcon/>}></Button>
  
        </Box>
        </Box>
        </Grid>
        </Grid>
      </Box>
    </div>
  );
}
