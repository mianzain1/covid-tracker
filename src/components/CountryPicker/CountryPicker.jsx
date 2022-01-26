import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CoutryPicker.module.css'
import { fetchCountries } from '../../api'
const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setFetchCountries(await fetchCountries())
        }
        fetchApi()
    }, [setFetchCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker