import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuth } from 'context/authContext';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import LoginIcon from '@mui/icons-material/Login';

const pages = [
    {
        name: 'Profile',
        link: "/profile",
        isAuth: true
    },
    {
        name: 'About',
        link: "/about",
        isAuth: false
    },
    {
        name: 'Contact Us',
        link: "/contact",
        isAuth: false
    },
];
const settings = [];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { session } = useAuth();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/ "
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"

                            anchorEl={anchorElNav}
                            // anchorOrigin={{
                            //     vertical: 'bottom',
                            //     horizontal: 'left',
                            // }}
                            keepMounted
                            // transformOrigin={{
                            //     vertical: 'top',
                            //     horizontal: 'left',
                            // }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            marginThreshold={0}
                            PaperProps={{
                                style: {
                                    width: "100%",
                                    maxWidth: "100%",
                                    left: 0,
                                    right: 0,
                                }
                            }}
                            anchorOrigin={{ vertical: "bottom" }}
                            transformOrigin={{ vertical: "top" }}
                        >
                            {pages.map((page) => (
                                <>

                                    {page.isAuth === true && session === null ? null : <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                                        <Link href={page.link}><Typography textAlign="center">{page.name}</Typography></Link>
                                    </MenuItem>}
                                </>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        {pages.map((page) => (
                            <>
                                {page.isAuth === true && session == null ? (
                                    null
                                ) : (
                                    <Link key={page.link} href={page.link}>
                                        <Button
                                            key={page.link}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page.name}
                                        </Button>
                                    </Link>
                                )
                                }
                            </>
                        ))}
                    </Box>

                    {session ? <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Sign Out">
                            <IconButton onClick={() => signOut()} sx={{ p: 0 }}>
                                <Avatar alt="Linkedin User" src={session.user.image} />
                            </IconButton>
                        </Tooltip>
                    </Box> : <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Sign In">
                            <Button variant='' onClick={() => signIn()}>
                                Sign In <LoginIcon />

                            </Button>
                        </Tooltip>
                    </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;