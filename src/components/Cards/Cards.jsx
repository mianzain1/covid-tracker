import React, { useEffect } from 'react'
import { Card, CardContent, Typography, Grid, CircularProgress } from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css';
import cx from 'classnames'
const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
   
      
    


    if (!confirmed) {
        return <CircularProgress />
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent >
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={3} separator=',' /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" color="textSecondary">Number of Active Cases of Covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent >
                        <Typography color="textSecondary">Recover</Typography>
                        <Typography variant="h5"><CountUp start={0} end={Math.floor(Math.random() * (100000 - 1000))} duration={3} separator=',' /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" color="textSecondary">Number of recoveries from Covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent >
                        <Typography color="textSecondary">Death</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={3} separator=',' /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" color="textSecondary">Number Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
