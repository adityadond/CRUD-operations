import React from 'react';
import { Box , makeStyles,Typography} from '@material-ui/core';
import Youtube from '../Assets/images/youtube.png';
import InstaTele from '../Assets/images/InstaTele.jpeg';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})
function CodeForInterview() {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Code for Interview</Typography>
            <Box style={{display: 'flex'}}>
                <img src={Youtube} className={classes.image} />
                <img src={InstaTele} className={classes.image} />
            </Box>
        </Box>
    )
}

export default CodeForInterview;
