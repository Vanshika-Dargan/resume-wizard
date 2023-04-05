import {Typography, TextField,Button,Grid,Container} from '@mui/material'
import SplitButton from './Dropdown';
const Education=({education,setEducation})=>{
    const handleChange=(e)=>{
        e.preventDefault();
        setEducation({...education,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(education);
    }
    return(
        <Container >
            
        <Typography sx={{ lineHeight: '3', fontFamily: "inherit" ,fontWeight:'600'} }variant="h4" align='left'>Tell us about your education</Typography>
           
        <Grid container spacing={2}>
         
        <Grid item xs={6}>
            <Typography variant="h6" align='left' >School Name</Typography>
            <TextField name="school" id="outlined-basic" variant="outlined" label= "Enter your school name" fullWidth/>
            </Grid> 
            <Grid item xs={6}>
                        <Typography  variant="h6" align='left'>School Location</Typography>   
            <TextField name="location" id="outlined-basic" variant="outlined" fullWidth label= "Enter School location"/>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Degree</Typography>
            <SplitButton name="degree" education={education} seteducation={setEducation}/>
            </Grid>
            <Grid item xs={6}>
                </Grid>
            <Grid item xs={6}>   
            <Typography variant="h6" align='left' >Field Of Study</Typography>
            <TextField name="field" id="outlined-basic" variant="outlined" label= "e.g. Computer Science" fullWidth/> 
            </Grid>  
            <Grid item xs={3}>
            <Typography variant="h6" align='left' >Graduation Start Date</Typography>
            <TextField name="startYear" id="outlined-basic" variant="outlined" fullWidth/> 
            </Grid>
            <Grid item xs={3}>
            <Typography variant="h6" align='left' >Graduation end date</Typography>
            <TextField name="endYear" id="outlined-basic" variant="outlined"  fullWidth/>    
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
export default Education;
