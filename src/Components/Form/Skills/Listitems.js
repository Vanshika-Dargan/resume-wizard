import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export default function InteractiveList({totalskills,settotalskills}) {
  // console.log(totalskills)
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const handleClick = (value) => {
    // console.log(value);
    settotalskills(totalskills.filter((skill) => skill !== value));
    console.log(totalskills);
  };
  //  const [test, setTest] = React.useState(test1);
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Skills List:
          </Typography>
            <List dense={dense}>
            {
            totalskills.map((skill,index) =>
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleClick(skill)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                  primary={skill}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )
              }
            </List>
        </Grid>
      </Grid>
    </Box>
  );
}
