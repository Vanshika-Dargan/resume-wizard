import {Container} from '@mui/material'
import {Typography} from '@mui/material'
import {TextField,Button,Grid} from '@mui/material'
import resumephoto from './resumephoto.jpg'
const LoginForm=()=>{
    return(
        <Container >
           
        <Grid marginTop={3} marginLeft={2} container spacing={9}>
        <Grid marginTop={3} item >
        <img src={resumephoto}/>
        </Grid>
        <Grid item >
        <Typography sx={{ lineHeight: '3', fontFamily: "inherit" ,fontWeight:'600'} }variant="h4" align='left'>Welcome Back</Typography>
            
            <Typography variant="h6" align='left' >Email</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "Enter your Email" fullWidth/>   
                        <Typography sx={{ marginTop: 2 }} variant="h6" align='left'>Password</Typography>   
            <TextField id="outlined-basic" variant="outlined" fullWidth label= "Enter your password"/>
            
            <Button sx={{ marginTop: 2 }}variant="contained" color="primary" fullWidth size='large'>LogIn</Button>
            {/* <Button sx={{ marginTop: 2,marginLeft: 2 }}variant="contained" color="secondary">Clear</Button>*/}
            
        </Grid>
        </Grid>
        </Container>
    )
}
export default LoginForm;