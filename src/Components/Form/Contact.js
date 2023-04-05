import {Typography, TextField,Button,Grid,Container} from '@mui/material'
import { useState } from 'react'
const Contact=({contact,setContact})=>{
    
    const handleChange=(e)=>{
        e.preventDefault();
        setContact({...contact,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(contact);
    }
    
    return(
        <Container >
             <form onSubmit={handleSubmit}> 
        <Grid container spacing={2}>
        
        <Typography sx={{ lineHeight: '3', fontFamily: "inherit" ,fontWeight:'600'} }variant="h4" align='left'>What’s the best way for employers to contact you?</Typography>
         
        <Grid item xs={6}>
            <Typography variant="h6" align='left' >First Name</Typography>
            <TextField name="firstName" id="outlined-basic" variant="outlined" label= "Enter your first name" fullWidth onChange={handleChange}/>
            </Grid> 
            <Grid item xs={6}>
                        <Typography  variant="h6" align='left'>Last Name</Typography>   
            <TextField name="lastName" id="outlined-basic" variant="outlined" fullWidth label= "Enter your last name" onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Profession</Typography>
            <TextField name="profession" id="outlined-basic" variant="outlined" label= "e.g. Software Developer" fullWidth onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>
                </Grid>
            <Grid item xs={6}>   
            <Typography variant="h6" align='left' >City</Typography>
            <TextField name="city" id="outlined-basic" variant="outlined" label= "e.g. New Delhi" fullWidth onChange={handleChange}/> 
            </Grid>  
            <Grid item xs={3}>
            <Typography variant="h6" align='left' >Country</Typography>
            <TextField name="country" id="outlined-basic" variant="outlined" label= "e.g. India" fullWidth onChange={handleChange}/> 
            </Grid>
            <Grid item xs={3}>
            <Typography variant="h6" align='left' >Pincode</Typography>
            <TextField name="pincode" id="outlined-basic" variant="outlined" label= "e.g. 11034" fullWidth onChange={handleChange}/>    
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Phone No</Typography>
            <TextField name="phoneNo" id="outlined-basic" variant="outlined" label= "e.g. +91XXXXXXXXXX" fullWidth onChange={handleChange}/>    
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Email</Typography>
            <TextField name="email" id="outlined-basic" variant="outlined" label= "Enter your Email" fullWidth onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>
            <Button sx={{ marginTop: 2 ,marginRight: 30}}variant="contained" color="primary" size='large'>Back</Button>
            </Grid>
            <Grid item xs={6}>
            <Button type="submit"sx={{ marginTop: 2 ,marginLeft: 30}}variant="contained" color="primary" size='large'>Next</Button>
            </Grid>
            
           
        </Grid>
        </form> 
        </Container>
    )
}
export default Contact;
