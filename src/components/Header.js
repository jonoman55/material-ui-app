import React from 'react';
import { AppBar, Grid, IconButton, Toolbar, InputBase, Badge, makeStyles } from '@material-ui/core';
import { NotificationsNone, ChatBubbleOutline, PowerSettingsNew, Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        marginTop: '5px',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignContent='center'>
                    <Grid item>
                        <InputBase
                            className={classes.searchInput}
                            placeholder='Search topics'
                            startAdornment={<Search fontSize='small' />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNone fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutline fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <PowerSettingsNew fontSize='small' />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
