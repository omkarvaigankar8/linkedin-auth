import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import '../styles/Home.module.scss'
import Login from '../components/Login'
import { Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import SwiperSlider from 'components/UI/Slider'
import ImageCollage from 'components/ImageCollage'

export default function Home() {

  return (
    <>
      <SwiperSlider />
      <Container className={styles.container}>
        <Grid item xs={12} md={12} sx={{ marginTop: { md: '4rem', xs: '2rem' } }}>
          <Typography variant='h3'>Something About Us</Typography>
          <Typography variant='body1'>If you are going to be building or selling products or services, you are going to get asked questions...
            Skillbuilder is a product built out of maad labs to help users easily identify commonly asked questions and crowdsource their teams for the best answers. SkillBuilder is the simplest way to organize a database and visualize all the questions you are getting asked by colleagues, prospects, and clients, in one easy-to-search place.</Typography>
          <Typography variant='body1'>If you are going to be building or selling products or services, you are going to get asked questions...
            Skillbuilder is a product built out of maad labs to help users easily identify commonly asked questions and crowdsource their teams for the best answers. SkillBuilder is the simplest way to organize a database and visualize all the questions you are getting asked by colleagues, prospects, and clients, in one easy-to-search place.</Typography>
        </Grid>
        <ImageCollage />
      </Container>
    </>
  )
}

