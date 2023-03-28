import {Typography, TextField,Button,Grid,Container} from '@mui/material'
const Contact=()=>{
    return(
        <Container >
        <Grid container spacing={2}>
        
        <Typography sx={{ lineHeight: '3', fontFamily: "inherit" ,fontWeight:'600'} }variant="h4" align='left'>What’s the best way for employers to contact you?</Typography>
            
        <Grid item xs={6}>
            <Typography variant="h6" align='left' >First Name</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "Enter your first name" fullWidth/>
            </Grid> 
            <Grid item xs={6}>
                        <Typography  variant="h6" align='left'>Last Name</Typography>   
            <TextField id="outlined-basic" variant="outlined" fullWidth label= "Enter your last name"/>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Profession</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "e.g. Software Developer" fullWidth/>
            </Grid>
            <Grid item xs={6}>
                </Grid>
            <Grid item xs={6}>   
            <Typography variant="h6" align='left' >City</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "e.g. New Delhi" fullWidth/> 
            </Grid>  
            <Grid item xs={3}>
            <Typography variant="h6" align='left' >Country</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "e.g. India" fullWidth/> 
            </Grid>
            <Grid item xs={3}>
            <Typography variant="h6" align='left' >Pincode</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "e.g. 11034" fullWidth/>    
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Phone No</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "e.g. +91XXXXXXXXXX" fullWidth/>    
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h6" align='left' >Email</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "Enter your Email" fullWidth/>
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
