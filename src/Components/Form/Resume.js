import { Typography,Paper, Container, Box, CardContent ,Card, colors} from "@mui/material";

const Resume = () => {
    return (
        <Container>
        <Typography variant="h2">Resume Preview</Typography>
        <Box sx={{border:'2px solid black' ,margin:'60px'}}>
        
        <Paper>
        <Card sx={{ marginBottom:"5px",backgroundColor:"#87CBB9"}}>
        <CardContent>
            <Typography variant="h2">Your Name</Typography>
            <Typography variant="h4">Profession</Typography>
        </CardContent>
        </Card>
        <Card >
        <CardContent>
            <Typography variant="h6">Email - abc@gmail.com</Typography>
            <Typography variant="h6">Phone - 1234567890</Typography>
            <Typography variant="h6">Address - 123, abc street, xyz city, 123456</Typography>
        </CardContent>
        </Card>
            <Card sx={{border:"0.4px solid grey"}}>
            <CardContent>
                <Typography variant="h4" >Education</Typography>
                <Typography variant="h4">Bachelor's in Technology</Typography>
                <Typography variant="h5">Computer Science</Typography>
                <Typography variant="h5">abc school</Typography>
                <Typography variant="h5">xyz city</Typography>
                <Typography variant="h5">2018-2022</Typography>
            </CardContent>
            </Card>
            <Card sx={{margin:"20px",border:"0.4px solid grey"}}>
            <CardContent>
                <Typography variant="h4">Work Experience</Typography>
                <Typography variant="h5">Title - Software Engineer</Typography>
                <Typography variant="h5">Organization - xyz company</Typography>
                <Typography variant="h5">City - xyz city</Typography>
                <Typography variant="h5">Country - India</Typography>
                <Typography variant="h5">Start Date - 01/01/2021</Typography>
                <Typography variant="h5">End Date - 01/01/2022</Typography>
            </CardContent>
            </Card>
            <Card sx={{margin:"20px", border:"0.4px solid grey"}}>
            <CardContent>
                <Typography variant="h4">Skills</Typography>
                <Typography variant="h5">Skill 1</Typography>
                <Typography variant="h5">Skill 2</Typography>
                <Typography variant="h5">Skill 3</Typography>
                <Typography variant="h5">Skill 4</Typography>
                <Typography variant="h5">Skill 5</Typography>
            </CardContent>
            </Card>

        </Paper>
        </Box>
        </Container>
    );
    }
    export default Resume;