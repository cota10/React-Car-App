import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';


interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(149deg, #FBAB7E 0%, #F7CE68 44%, #ffffff 100%);`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'Black',
    },
    button_text: {
        color: 'gray',
        textDecoration: 'none',
    },
})

export const Home = ( props: Props ) => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
                <Button>
                    <Link to='/Car' className={classes.button_text}>Take me to my Car's</Link>
                </Button>
            </div>
            </div>
        </>
    )
}
