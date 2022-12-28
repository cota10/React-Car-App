import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Digits from '../../assets/images/carlogo.png';

const useStyles = makeStyles({
    logo: {
        content: `url(${Digits})`,
        maxWidth: '20%',
        height: 'auto',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: 'black',
        zIndex: 1,
        borderBottom: '1px solid grey',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceEvenly: {
        justifyContent: 'space-evenly',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceEvenly}`}>
            <div className={`${classes.navlogo} `}>
                    <Link to='/' className={`${classes.logo} ${classes.p5}`}>
                    </Link>
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceEvenly} ${classes.psides}`}>
                    <li>
                        <Button>
                        <Link to="Car" className={`${classes.navbarItem} ${classes.psides}`}>My Car's</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}