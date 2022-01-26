import React from 'react';
import { Cards, Charte, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api/'
import coronaImg  from './images/image.png';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchdata = await fetchData();

    this.setState({ data: fetchdata });
  }
  handleCountryChange = async (country) => {
    const fetchdata = await fetchData(country);
    this.setState({ data: fetchdata, country: country });



    console.log(country)
  }
  render() {

    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt='covid 19' />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charte data={data} country={country} />
      </div>
    );
  }
}

export default App;
