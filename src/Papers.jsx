import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import logo from './images/ic-sessions.svg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
   
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function SimplePaper() {
  return (
    // <Box
    // sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
      
    //     '& > :not(style)': {
        
    //       pr:8,
    //       height: 120,
    //     },
    //   }}
    // >
    //   <Paper elevation={0} sx={{ ...commonStyles, borderColor: 'grey.300' }}>
    //   <Box sx={{pl:1.25}}  >
       
    //     <Box sx={{pt:1,}}>
    //     <img src={logo} alt="Logo" />
    //     </Box>
    //     <Box sx={{mb:0}}>
    //     <Typography variant="h5" component="h2">
    //      <b >12</b>
    //   </Typography>
    //     </Box>
       
    //     <Box sx={{ pt:0}}>
    //     <Typography variant="subtitle2">
    //     Total Charges
    //   </Typography>
    //     </Box>
    //   </Box>
    //   </Paper>
    //   <Paper elevation={0} sx={{ ...commonStyles, borderColor: 'grey.300' }}>
    //   <Box sx={{pl:1.25}}  >
       
    //     <Box sx={{pt:1,}}>
    //     <img src={logo} alt="Logo" />
    //     </Box>
    //     <Box sx={{}}>
    //     <Typography variant="h5" component="h2">
    //      <b>50</b>
    //   </Typography>
    //     </Box>
       
    //     <Box sx={{ }}>
    //     <Typography variant="subtitle2">
    //     Total Booked
    //   </Typography>
    //     </Box>
    //   </Box>
    //   </Paper>
    //   <Paper elevation={0} sx={{ ...commonStyles, borderColor: 'grey.300' }}>
    //   <Box sx={{pl:1.25,pr:4}}  >
       
    //     <Box sx={{pt:1,}}>
    //     <img src={logo} alt="Logo" />
    //     </Box>
    //     <Box sx={{}}>
    //     <Typography variant="h5" component="h2">
    //      <b>100</b>
    //   </Typography>
    //     </Box>
       
    //     <Box sx={{ }}>
    //     <Typography variant="subtitle2" >
    //     Available
    //   </Typography>
    //     </Box>
    //   </Box>
    //   </Paper>
    //   <Paper elevation={0} sx={{ ...commonStyles, borderColor: 'grey.300' }}>
    //   <Box sx={{pl:1.25,pr:1}}  >
       
    //     <Box sx={{pt:1,}}>
    //     <img src={logo} alt="Logo" />
    //     </Box>
    //     <Box sx={{}}>
    //     <Typography variant="h5" component="h2">
    //      <b>50</b>
    //   </Typography>
    //     </Box>
       
    //     <Box sx={{ }}>
    //     <Typography variant="subtitle2">
    //     Total Users
    //   </Typography>
    //     </Box>
    //   </Box>
    //   </Paper>
    // </Box>

    
    <Grid container sx={{p:1.25}} rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
      
  <Grid item xs={6}>
        
         <Box sx={{ ...commonStyles, borderColor: 'grey.300',p:1,m:0,borderRadius:1 }} >

           <Box sx={{pt:0.5}}>
           <img src={logo} alt="Logo" />
           </Box>
           <Box sx={{}}>
           <Typography variant="h5" component="h2">
            <b>50</b>
         </Typography>
           </Box>

           <Box sx={{ }}>
           <Typography variant="subtitle2">
           Total Booked
         </Typography>
           </Box>
         </Box>
        
  </Grid>
  <Grid item xs={6}>
  <Box sx={{ ...commonStyles, borderColor: 'grey.300',p:1,m:0,borderRadius:1  }} >

<Box sx={{pt:0.5}}>
<img src={logo} alt="Logo" />
</Box>
<Box sx={{}}>
<Typography variant="h5" component="h2">
 <b>50</b>
</Typography>
</Box>

<Box sx={{ }}>
<Typography variant="subtitle2">
Total Booked
</Typography>
</Box>
</Box>
  </Grid>
  <Grid item xs={6}>
  <Box sx={{ ...commonStyles, borderColor: 'grey.300',p:1,m:0,borderRadius:1  }} >

<Box sx={{pt:0.5}}>
<img src={logo} alt="Logo" />
</Box>
<Box sx={{}}>
<Typography variant="h5" component="h2">
 <b>50</b>
</Typography>
</Box>

<Box sx={{ }}>
<Typography variant="subtitle2">
Total Booked
</Typography>
</Box>
</Box>
  </Grid>
  <Grid item xs={6}>
  <Box sx={{ ...commonStyles, borderColor: 'grey.300',p:1,m:0 ,borderRadius:1 }} >

<Box sx={{pt:0.5}}>
<img src={logo} alt="Logo" />
</Box>
<Box sx={{}}>
<Typography variant="h5" component="h2">
 <b>50</b>
</Typography>
</Box>

<Box sx={{ }}>
<Typography variant="subtitle2">
Total Booked
</Typography>
</Box>
</Box>
  </Grid>
  
</Grid>

  );
  
}
