import {Typography, TextField,Button,Grid,Container} from '@mui/material'
import StartDate from '../../Datepick';
import EndDate from '../../Datepick';

const Work=({work,setWork})=>{
    const handleChange=(e)=>{
        e.preventDefault();
        setWork({...work,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(work);
    }
    
   
    return(
        <Container >
            <Typography sx={{ lineHeight: '3', fontFamily: "inherit" ,fontWeight:'600'} }variant="h4" align='left'>Tell us about your recent job.</Typography>
        <form onSubmit={handleSubmit}> 
        <Grid container spacing={2}>
            
        <Grid item xs={6}>
            <Typography variant="h6" align='left' >Job Title</Typography>
            <TextField id="outlined-basic" name="title" variant="outlined" label= "Title" fullWidth onChange={handleChange}/>
            </Grid> 
            <Grid item xs={6}>
                        <Typography  variant="h6" align='left'>Organization</Typography>   
            <TextField id="outlined-basic" name="organization" variant="outlined" fullWidth label= "e.g. Microsoft" onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >City</Typography>
            <TextField id="outlined-basic" name="city" variant="outlined" label= "e.g. New York" fullWidth onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>   
            <Typography variant="h6" align='left' >Country</Typography>
            <TextField id="outlined-basic" name="country" variant="outlined" label= "e.g. United States" fullWidth onChange={handleChange}/> 
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Start Date</Typography>
            <StartDate work={work} setWork={setWork} label="Start Date"  />
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >End Date</Typography>
            <EndDate label="End Date"  />
            </Grid>
            <Grid item xs={6}>
            <Button sx={{ marginTop: 2 ,marginRight: 30}}variant="contained" color="primary" size='large'>Back</Button>
            </Grid>
            <Grid item xs={6}>
            <Button sx={{ marginTop: 2 ,marginLeft: 30}} type="submit" variant="contained" color="primary" size='large'>Next</Button>
            </Grid>
            
        
        </Grid>
        </form>
        </Container>
    )
}
export default Work;
