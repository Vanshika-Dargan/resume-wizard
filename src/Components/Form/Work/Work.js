import {Typography, TextField,Button,Grid,Container} from '@mui/material'
import StartDate from '../../Datepick';
import EndDate from '../../Datepick';
const Contact=()=>{
    return(
        <Container >
            <Typography sx={{ lineHeight: '3', fontFamily: "inherit" ,fontWeight:'600'} }variant="h4" align='left'>Tell us about your recent job.</Typography>
        <Grid container spacing={2}>
            
        <Grid item xs={6}>
            <Typography variant="h6" align='left' >Job Title</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "Title" fullWidth/>
            </Grid> 
            <Grid item xs={6}>
                        <Typography  variant="h6" align='left'>Organization</Typography>   
            <TextField id="outlined-basic" variant="outlined" fullWidth label= "e.g. Microsoft"/>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >City</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "e.g. New York" fullWidth/>
            </Grid>
            <Grid item xs={6}>   
            <Typography variant="h6" align='left' >Country</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "e.g. United States" fullWidth/> 
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Start Date</Typography>
            <StartDate label="Start Date"/>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >End Date</Typography>
            <EndDate label="End Date"/>
            </Grid>
            <Grid item xs={6}>
            <Button sx={{ marginTop: 2 ,marginRight: 30}}variant="contained" color="primary" size='large'>Back</Button>
            </Grid>
            <Grid item xs={6}>
            <Button sx={{ marginTop: 2 ,marginLeft: 30}}variant="contained" color="primary" size='large'>Next</Button>
            </Grid>
            
        
        </Grid>
        </Container>
    )
}
export default Contact;
