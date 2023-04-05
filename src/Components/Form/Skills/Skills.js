import {useState,useEffect} from "react";
import { TextField,Typography,Button,Container } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import InteractiveList from "./Listitems";
 

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [totalskills, setTotalskills] = useState([]);
  
    const handleClick = () => {
      setTotalskills([...skills, ...totalskills]);
    };
  
    const handleChange = (event) => {
      setSkills(event.target.value.split(","));
    };
  
    
    return (
        <div>
            <Typography variant="h4" align='center' sx={{margin:"30px  0 ",marginRight:"100px"}} >Tell us about your skills</Typography>
            <TextField id="outlined-basic" variant="outlined" label= "e.g. Python" onChange={handleChange} sx={{width:"500px"}}/>

            <Button onClick={handleClick}><AddCircleIcon/></Button>
            <Button onClick={
                () => {
                    console.log("Remove skill")
                }
            }><RemoveCircleIcon/></Button>
            <Container align="center" sx={{marginLeft:"200px"}}>
            <InteractiveList totalskills={totalskills} settotalskills={setTotalskills} />
            </Container>
        </div>
    )
}
export default Skills;