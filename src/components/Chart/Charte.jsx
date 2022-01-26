import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import {CircularProgress} from '@material-ui/core'
import Chart from 'chart.js/auto'
import styles from "./Chart.module.css"


const Charte = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailydata, setdailydata] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setdailydata(await fetchDailyData());
        }
        fetchApi();
    }, [])

    const lineChart = (
        dailydata.length ? (<Line
            data={{
                labels: dailydata.map(({ date }) => date),
                datasets: [{
                    data: dailydata.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: "#333ff",
                    fill: true,
                }, {
                    data: dailydata.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: "red",
                    backgroundColor: `rgba(255,0,0,0.5)`,
                    fill: true,
                }]
            }}
        />) : null
    );
    const barChart = (
        
        confirmed ? (
            <Bar
                data={{
                    labels: ['infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255,0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current State in ${country}` }
                }}
            />
        ) : null
    )
    if (!confirmed) {
        return <CircularProgress />
    }
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charte
