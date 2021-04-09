import { Button as MaterialUiButton, Grid, makeStyles, Avatar, Typography } from '@material-ui/core';
import React from 'react';


interface TileButtonProps {
    title?: string
    subTitle?: string
    percent?: string
    backgroundColor?: string
    color?: string
    selected?: boolean
}

const useStyles = makeStyles((theme) => ({
    buttonSelected: {
        backgroundColor: 'white',
        color: theme.palette.secondary.main,
        width: '9.5em',
        height: '6.5em'
    },
    buttonNotSelected: {
       backgroundColor: 'rgba(56,178,204,0.4)',
       opacity: '60%',
        color: theme.palette.secondary.main,
        width: '9.5em',
        height: '6.5em'
    },
    titles: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontWeight: 'bold',
        letterSpacing: '1px'

    },
    percentSmall: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
        position: 'absolute',
        right: '-5px',
        top:'-7px',
        backgroundColor: 'black',
        color: '#38b2cc',
        fontFamily: 'arial',
        fontSize: '13px',
        fontWeight: 'bold'
      },
}));





const TileButton: React.FC<TileButtonProps> = ({ title, subTitle, percent, backgroundColor, color, selected, ...rest }) => {

 const classes = useStyles()
 
    return (
        <MaterialUiButton
            className={`${selected? classes.buttonSelected: classes.buttonNotSelected }`}
            variant='contained'
            style={{ borderRadius: '7px', backgroundColor, color}}
            autoCapitalize='none'
            {...rest}
            
        >
             {percent && <Avatar className={classes.percentSmall}>{percent}%</Avatar> }
            <Grid container className={classes.titles}>
                <Grid  item >
                    <Typography variant='h6' className={classes.title}>
                        {title}
                    </Typography>
                </Grid>
                <Grid  item>
                    <Typography variant='subtitle2'>
                        {subTitle}
                    </Typography>
                </Grid>
            </Grid>
        </MaterialUiButton>
    );

}
               
export type { TileButtonProps };
export default TileButton;