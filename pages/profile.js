import { Container, Box, Grid, Typography, Button, IconButton } from '@mui/material';
import { useAuth } from '../context/authContext';
import styles from '../styles/Home.module.scss'
import { Logout } from '@mui/icons-material';
import { signOut } from 'next-auth/react';
import ImageCollage from 'components/ImageCollage';

const Profile = () => {
    const { session } = useAuth();
    return (
        <Container className={styles.container}>
            <Container maxWidth="xl" sx={{ paddingTop: "60px" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item md={2} sm={12}>
                            <img src={session?.user?.image} />
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <Typography variant='h5'>{session?.user?.name}</Typography>
                            <Typography variant='h6'>{session?.user?.email}</Typography>
                            <Button sx={{ marginTop: "20px" }} variant='contained' onClick={() => signOut()}>
                                Sign Out <Logout />

                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <ImageCollage />
        </Container>
    );
};

export default Profile;